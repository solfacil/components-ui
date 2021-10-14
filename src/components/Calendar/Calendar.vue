<template>
  <div :id="id" class="calendar">
    <DatePicker
      v-model="dateTime"
      :lang="lang"
      :format="format"
      :type="viewType"
      :inline="inline"
      :range="range"
      :multiple="false"
      range-separator=" - "
      :disabled-date="disabledDate"
      :open="openCalendar"
      :placeholder="placeholder"
      @click.native="initDate = null"
      @open="open"
      @clear="clear"
      @change="handleChange"
    >
      <template #icon-calendar>
        <IconCalendar />
      </template>

      <template #icon-clear>
        <IconClose />
      </template>

      <template #footer>
        <Button
          id="select-date"
          size="small"
          :disabled="!dateTime || disabledButton"
          @click="select"
        >
          Ok
        </Button>

        <Button
          id="cancel-date"
          size="small"
          variant="secondary"
          @click="clear"
        >
          Cancelar
        </Button>
      </template>
    </DatePicker>
  </div>
</template>

<script>
import Button from '@components/Button/Button';
import DatePicker from 'vue2-datepicker';
import IconCalendar from '@img/icon/icon-calendar.svg';
import IconClose from '@img/icon/icon-close.svg';

export default {
  name: 'Calendar',

  components: {
    Button,
    DatePicker,
    IconCalendar,
    IconClose,
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
      default: 'DD/MM/YYYY',
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

  data() {
    return {
      dateTime: null,
      initDate: null,
      openCalendar: null,
      limitRangeTop: null,
      disabledButton: true,
      lang: {
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
      },
    };
  },

  computed: {
    viewType() {
      return this.view;
    },
  },

  mounted() {
    this.dateTime = this.value;
  },

  methods: {
    handleChange() {
      this.disabledButton = false;
    },

    select() {
      this.$emit('input', this.dateTime);
      this.$emit('confirm', this.dateTime);
      this.openCalendar = null;
    },

    clear() {
      this.dateTime = this.value;
      this.openCalendar = false;
      this.$emit('clear');
    },

    open() {
      this.openCalendar = true;
    },

    disabledDate(cellDate, selectedDate) {
      if ((!this.disabledBefore && !this.range) || selectedDate.length !== 1) {
        return;
      }

      let limitRangeTop;
      let limitRangeDown;

      if (this.range && selectedDate.length === 1) {
        if (!this.initDate && selectedDate[0]) {
          this.initDate = new Date(selectedDate[0]);
        }

        if (this.view === 'date') {
          limitRangeTop = new Date(
            this.initDate.getTime() + (this.rangeLimit - 1) * 24 * 3600 * 1000,
          );

          limitRangeDown = new Date(
            this.initDate.getTime() - (this.rangeLimit - 1) * 24 * 3600 * 1000,
          );
        }

        if (this.view !== 'date') {
          limitRangeTop = new Date(this.initDate).setMonth(
            this.initDate.getMonth() + this.rangeLimit - 1,
          );

          limitRangeDown = new Date(this.initDate).setMonth(
            this.initDate.getMonth() - this.rangeLimit - 1,
          );
        }
      }

      return (
        (this.disabledBefore && cellDate < this.disabledBefore) ||
        (limitRangeDown && cellDate < limitRangeDown) ||
        (limitRangeTop && cellDate > limitRangeTop)
      );
    },
  },
};
</script>

<style lang="scss">
@import '@scss/_calendar';
</style>
