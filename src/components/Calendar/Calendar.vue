<template>
  <div :id="id" class="calendar">
    <DatePicker
      ref="datepicker"
      v-model="dateTime"
      :format="format"
      :month-picker="viewType === 'month'"
      :time-picker="viewType === 'timer'"
      :inline="inline"
      :range="range"
      range-separator=" - "
      :open="openCalendar"
      :placeholder="placeholder"
      :enable-time-picker="false"
      locale="pt-BR"
      :clearable="true"
      :month-name-format="viewType === 'month' ? 'short' : 'long'"
      hide-offset-dates
      week-start="0"
      @open="open"
      @clear="clear"
      @internalModelChange="selectTemporallyDate"
    >
      <template #calendar-header="{ index }">{{ lang.days[index] }}</template>

      <template #input-icon>
        <div class="input-icon">
          <img height="16" width="16" src="@img/icon/icon-calendar.svg" />
        </div>
      </template>

      <template #clear-icon>
        <img height="16" width="16" src="@img/icon/icon-close-black.svg" />
      </template>

      <template #action-select>
        <div class="flex w-full">
          <Button
            id="select-date"
            size="small"
            :disabled="disableSelectButton"
            @click="select"
          >
            Ok
          </Button>

          <Button
            id="cancel-date"
            size="small"
            variant="secondary"
            @click="clear"
            >Cancelar</Button
          >
        </div>
      </template>
    </DatePicker>
  </div>
</template>

<script>
import Button from '@components/Button/Button';
import { defineComponent, ref, computed } from 'vue';
// import DatePicker from 'vue3-datepicker';

import DatePicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

export default defineComponent({
  name: 'Calendar',

  components: {
    Button,
    DatePicker,
  },

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Specify the value - v-model */
    value: {
      type: [String, Array, Object, Date],
      default: null,
    },

    /** Active range in calendar */
    range: {
      type: Boolean,
      default: false,
    },

    /** Set limit range */
    rangeLimit: {
      type: Number,
      default: 12,
    },

    /** Set calendar inline */
    inline: {
      type: Boolean,
      default: false,
    },

    /** Set format date */
    format: {
      type: String,
      default: 'dd/MM/yyyy',
    },

    /** Specify the kind of Calendar you want to create: <br/> date" | "month" | "year" */
    view: {
      default: 'date',
      type: String,
      validator: (value) =>
        ['date', 'month', 'year'].includes(value.toLowerCase()),
    },

    /** Input placeholder text */
    placeholder: {
      type: String,
      default: null,
    },

    /** Specify before date that cannot be selected:<br /> Tue Aug 31 2021 00:00:00 GMT-0300 (Brasilia Standard Time)  */
    disabledBefore: {
      type: [String, Object, Date],
      default: null,
    },
  },

  setup(props, { emit }) {
    const datepicker = ref(null);

    const initDate = ref(null);
    const dateTime = ref(props.value);
    const openCalendar = ref(null);
    const limitRangeTop = ref(null);
    const disabledButton = ref(true);

    const temporallyDate = ref(null);

    const viewType = computed(() => props.view);

    const disableSelectButton = computed(
      () => !(dateTime.value || temporallyDate.value),
    );

    const lang = {
      formatLocale: {
        monthsShort: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
      },
      days: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
      months: [
        'JAN',
        'FEV',
        'MAR',
        'ABR',
        'MAI',
        'JUN',
        'JUL',
        'AGO',
        'SET',
        'OUT',
        'NOV',
        'DEZ',
      ],
      pickers: [
        'next 7 days',
        'next 30 days',
        'previous 7 days',
        'previous 30 days',
      ],
      placeholder: {
        date: 'Select Date',
        dateRange: 'Select Date Range',
      },
    };

    function selectTemporallyDate(date) {
      temporallyDate.value = date;
    }

    function handleChange() {
      disabledButton.value = false;
    }

    function select() {
      dateTime.value = temporallyDate.value;

      emit('input', dateTime.value);
      emit('confirm', dateTime.value);

      emit('update:value', dateTime.value);
      openCalendar.value = false;
      datepicker.value.closeMenu();
    }

    function clear() {
      dateTime.value = props.value;
      temporallyDate.value = null;
      openCalendar.value = false;
      datepicker.value.closeMenu();

      emit('clear');
    }

    function open() {
      openCalendar.value = true;
    }

    function disabledDate(cellDate, selectedDate) {
      if (
        (!props.disabledBefore && !props.range) ||
        selectedDate.length !== 1
      ) {
        return;
      }

      let limitRangeTop;
      let limitRangeDown;

      if (props.range && selectedDate.length === 1) {
        if (!initDate.value && selectedDate[0]) {
          initDate.value = new Date(selectedDate[0]);
        }

        if (props.view === 'date') {
          limitRangeTop = new Date(
            initDate.value.getTime() +
              (props.rangeLimit - 1) * 24 * 3600 * 1000,
          );

          limitRangeDown = new Date(
            initDate.value.getTime() -
              (props.rangeLimit - 1) * 24 * 3600 * 1000,
          );
        }

        if (props.view !== 'date') {
          limitRangeTop.value = new Date(initDate.value).setMonth(
            initDate.value.getMonth() + props.rangeLimit - 1,
          );

          limitRangeDown = new Date(initDate.value).setMonth(
            initDate.value.getMonth() - props.rangeLimit - 1,
          );
        }
      }

      return (
        (props.disabledBefore && cellDate < props.disabledBefore) ||
        (limitRangeDown && cellDate < limitRangeDown) ||
        (limitRangeTop && cellDate > limitRangeTop)
      );
    }

    return {
      datepicker,
      lang,
      viewType,
      initDate,
      dateTime,
      openCalendar,
      limitRangeTop,
      disabledButton,
      disableSelectButton,
      temporallyDate,
      selectTemporallyDate,
      handleChange,
      select,
      clear,
      open,
      disabledDate,
    };
  },
});
</script>

<style lang="scss">
@import '@scss/_calendar.scss';
</style>
