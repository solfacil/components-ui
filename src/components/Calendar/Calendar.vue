<template>
  <div :id="id" class="calendar">
    <DatePicker
      v-model="time"
      :lang="lang"
      :format="format"
      :type="view"
      :inline="inline"
      :range="range"
      :multiple="false"
      range-separator=" - "
      :disabled-date="disabledDate"
      :open="openCalendar"
      :placeholder="placeholder"
      @open="open"
      @clear="clear"
    >
      <template #icon-calendar>
        <img src="@img/icon/icon-calendar.svg" />
      </template>

      <template #icon-clear>
        <img src="@img/icon/icon-close.svg" />
      </template>

      <template #footer>
        <Button id="select-date" size="small" :disabled="!time" @click="select">
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

export default {
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
  },

  data() {
    return {
      time: null,
      initDate: null,
      openCalendar: null,
      selectedDayPlus: null,
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

  methods: {
    select() {
      this.$emit('input', this.time);
      this.$emit('confirm', this.time);
      this.openCalendar = null;
    },

    clear() {
      this.time = null;
      this.initDate = null;
      this.openCalendar = false;
      this.$emit('clear');
    },

    open() {
      this.openCalendar = true;
    },

    disabledDate(cellDate, selectedDate) {
      if (!this.range || !selectedDate[0]) return;

      if (!this.initDate && selectedDate[0])
        this.initDate = new Date(selectedDate[0]);

      const selectedDayPlus =
        this.view === 'date'
          ? new Date(
              this.initDate.getTime() +
                (this.rangeLimit - 1) * 24 * 3600 * 1000,
            )
          : new Date(this.initDate).setMonth(
              this.initDate.getMonth() + this.rangeLimit - 1,
            );

      return cellDate < this.initDate || cellDate > selectedDayPlus;
    },
  },
};
</script>

<style lang="scss">
@import '@scss/_calendar';
</style>
