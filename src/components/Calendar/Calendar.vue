<template>
  <div :id="id" class="calendar">
    {{ calendarData }}
    <FunctionalCalendar v-model="calendarData" :configs="calendarConfigs">
      <template #footer>
        <Button :id="`confirm-${id}`" size="small">ok</Button>
        <Button :id="`cancel-${id}`" size="small">cancelar</Button>
      </template>
    </FunctionalCalendar>
  </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar';
import Button from '@components/Button/Button';

export default {
  name: 'Calendar',

  components: {
    Button,
    FunctionalCalendar,
  },

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      calendarData: {},
      calendarConfigs: {
        dateFormat: 'dd/mm/yyyy',
        isDateRange: true,
        sundayStart: true,
        dayNames: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'],
        hiddenElements: ['leftAndRightDays'],
        monthNames: [
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
    };
  },

  methods: {},
};
</script>

<style lang="scss">
@import '@scss/_calendar';
</style>
