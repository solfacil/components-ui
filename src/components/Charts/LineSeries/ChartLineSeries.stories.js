import ChartLineSeries from './ChartLineSeries';

export default {
  title: 'Components/UI Elements/Charts/Line Series',
  component: ChartLineSeries,
  argTypes: {},

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ChartLineSeries },
  template:
    '<div style="width: 900px;"><ChartLineSeries v-bind="$props" /></div>',
});

const chartdata = {
  datasets: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 51, 133,
    144, 142, 261, 265, 415, 413, 546, 651, 798, 1017, 1240, 1448, 1863, 2325,
    2365, 2365, 2064, 3017, 3224, 3210, 3640, 4301, 5268, 6030, 5744, 5669,
    5124, 4405, 4045, 4722, 4501, 4782, 5442, 5202, 5201, 5846, 6593, 7262,
    6715, 6609, 5924, 5674, 5374, 4893, 3521, 3070, 6319, 6729, 6249, 6454,
    8060, 7657, 8023, 8011, 7997, 7980, 7448, 6827, 6017, 5861, 5508, 5430,
    7798, 6557, 7586, 7424, 7424, 6744, 4841, 4841, 3423, 3151, 3517, 3823,
    3532, 3540, 2721, 3080, 5692, 8064, 6878, 5356, 4237, 8037, 8038, 8046,
    8051, 6667, 7788, 7619, 7514, 7159, 7013, 4871, 3398, 5809, 6627, 6218,
    5777, 6791, 5239, 5239, 2583, 1449, 1182, 1064, 944, 620, 468, 420, 467,
    511, 502, 610, 585, 611, 606, 656, 1188, 1187, 1203, 1218, 1155, 1115, 866,
    673, 621, 631, 521, 487, 498, 422, 375, 362, 335, 336, 276, 201, 202, 142,
    123, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  labels: [
    '2021-10-05T00:00:00',
    '2021-10-05T00:05:00',
    '2021-10-05T00:10:00',
    '2021-10-05T00:15:00',
    '2021-10-05T00:20:00',
    '2021-10-05T00:25:00',
    '2021-10-05T00:30:00',
    '2021-10-05T00:35:00',
    '2021-10-05T00:40:00',
    '2021-10-05T00:45:00',
    '2021-10-05T00:50:00',
    '2021-10-05T00:55:00',
    '2021-10-05T01:00:00',
    '2021-10-05T01:05:00',
    '2021-10-05T01:10:00',
    '2021-10-05T01:15:00',
    '2021-10-05T01:20:00',
    '2021-10-05T01:25:00',
    '2021-10-05T01:30:00',
    '2021-10-05T01:35:00',
    '2021-10-05T01:40:00',
    '2021-10-05T01:45:00',
    '2021-10-05T01:50:00',
    '2021-10-05T01:55:00',
    '2021-10-05T02:00:00',
    '2021-10-05T02:05:00',
    '2021-10-05T02:10:00',
    '2021-10-05T02:15:00',
    '2021-10-05T02:20:00',
    '2021-10-05T02:25:00',
    '2021-10-05T02:30:00',
    '2021-10-05T02:35:00',
    '2021-10-05T02:40:00',
    '2021-10-05T02:45:00',
    '2021-10-05T02:50:00',
    '2021-10-05T02:55:00',
    '2021-10-05T03:00:00',
    '2021-10-05T03:05:00',
    '2021-10-05T03:10:00',
    '2021-10-05T03:15:00',
    '2021-10-05T03:20:00',
    '2021-10-05T03:25:00',
    '2021-10-05T03:30:00',
    '2021-10-05T03:35:00',
    '2021-10-05T03:40:00',
    '2021-10-05T03:45:00',
    '2021-10-05T03:50:00',
    '2021-10-05T03:55:00',
    '2021-10-05T04:00:00',
    '2021-10-05T04:05:00',
    '2021-10-05T04:10:00',
    '2021-10-05T04:15:00',
    '2021-10-05T04:20:00',
    '2021-10-05T04:25:00',
    '2021-10-05T04:30:00',
    '2021-10-05T04:35:00',
    '2021-10-05T04:40:00',
    '2021-10-05T04:45:00',
    '2021-10-05T04:50:00',
    '2021-10-05T04:55:00',
    '2021-10-05T05:00:00',
    '2021-10-05T05:05:00',
    '2021-10-05T05:10:00',
    '2021-10-05T05:15:00',
    '2021-10-05T05:20:00',
    '2021-10-05T05:25:00',
    '2021-10-05T05:30:00',
    '2021-10-05T05:35:00',
    '2021-10-05T05:40:00',
    '2021-10-05T05:45:00',
    '2021-10-05T05:50:00',
    '2021-10-05T05:55:00',
    '2021-10-05T06:00:00',
    '2021-10-05T06:05:00',
    '2021-10-05T06:10:00',
    '2021-10-05T06:15:00',
    '2021-10-05T06:20:00',
    '2021-10-05T06:25:00',
    '2021-10-05T06:30:00',
    '2021-10-05T06:35:00',
    '2021-10-05T06:40:00',
    '2021-10-05T06:45:00',
    '2021-10-05T06:50:00',
    '2021-10-05T06:55:00',
    '2021-10-05T07:00:00',
    '2021-10-05T07:05:00',
    '2021-10-05T07:10:00',
    '2021-10-05T07:15:00',
    '2021-10-05T07:20:00',
    '2021-10-05T07:25:00',
    '2021-10-05T07:30:00',
    '2021-10-05T07:35:00',
    '2021-10-05T07:40:00',
    '2021-10-05T07:45:00',
    '2021-10-05T07:50:00',
    '2021-10-05T07:55:00',
    '2021-10-05T08:00:00',
    '2021-10-05T08:05:00',
    '2021-10-05T08:10:00',
    '2021-10-05T08:15:00',
    '2021-10-05T08:20:00',
    '2021-10-05T08:25:00',
    '2021-10-05T08:30:00',
    '2021-10-05T08:35:00',
    '2021-10-05T08:40:00',
    '2021-10-05T08:45:00',
    '2021-10-05T08:50:00',
    '2021-10-05T08:55:00',
    '2021-10-05T09:00:00',
    '2021-10-05T09:05:00',
    '2021-10-05T09:10:00',
    '2021-10-05T09:15:00',
    '2021-10-05T09:20:00',
    '2021-10-05T09:25:00',
    '2021-10-05T09:30:00',
    '2021-10-05T09:35:00',
    '2021-10-05T09:40:00',
    '2021-10-05T09:45:00',
    '2021-10-05T09:50:00',
    '2021-10-05T09:55:00',
    '2021-10-05T10:00:00',
    '2021-10-05T10:05:00',
    '2021-10-05T10:10:00',
    '2021-10-05T10:15:00',
    '2021-10-05T10:20:00',
    '2021-10-05T10:25:00',
    '2021-10-05T10:30:00',
    '2021-10-05T10:35:00',
    '2021-10-05T10:40:00',
    '2021-10-05T10:45:00',
    '2021-10-05T10:50:00',
    '2021-10-05T10:55:00',
    '2021-10-05T11:00:00',
    '2021-10-05T11:05:00',
    '2021-10-05T11:10:00',
    '2021-10-05T11:15:00',
    '2021-10-05T11:20:00',
    '2021-10-05T11:25:00',
    '2021-10-05T11:30:00',
    '2021-10-05T11:35:00',
    '2021-10-05T11:40:00',
    '2021-10-05T11:45:00',
    '2021-10-05T11:50:00',
    '2021-10-05T11:55:00',
    '2021-10-05T12:00:00',
    '2021-10-05T12:05:00',
    '2021-10-05T12:10:00',
    '2021-10-05T12:15:00',
    '2021-10-05T12:20:00',
    '2021-10-05T12:25:00',
    '2021-10-05T12:30:00',
    '2021-10-05T12:35:00',
    '2021-10-05T12:40:00',
    '2021-10-05T12:45:00',
    '2021-10-05T12:50:00',
    '2021-10-05T12:55:00',
    '2021-10-05T13:00:00',
    '2021-10-05T13:05:00',
    '2021-10-05T13:10:00',
    '2021-10-05T13:15:00',
    '2021-10-05T13:20:00',
    '2021-10-05T13:25:00',
    '2021-10-05T13:30:00',
    '2021-10-05T13:35:00',
    '2021-10-05T13:40:00',
    '2021-10-05T13:45:00',
    '2021-10-05T13:50:00',
    '2021-10-05T13:55:00',
    '2021-10-05T14:00:00',
    '2021-10-05T14:05:00',
    '2021-10-05T14:10:00',
    '2021-10-05T14:15:00',
    '2021-10-05T14:20:00',
    '2021-10-05T14:25:00',
    '2021-10-05T14:30:00',
    '2021-10-05T14:35:00',
    '2021-10-05T14:40:00',
    '2021-10-05T14:45:00',
    '2021-10-05T14:50:00',
    '2021-10-05T14:55:00',
    '2021-10-05T15:00:00',
    '2021-10-05T15:05:00',
    '2021-10-05T15:10:00',
    '2021-10-05T15:15:00',
    '2021-10-05T15:20:00',
    '2021-10-05T15:25:00',
    '2021-10-05T15:30:00',
    '2021-10-05T15:35:00',
    '2021-10-05T15:40:00',
    '2021-10-05T15:45:00',
    '2021-10-05T15:50:00',
    '2021-10-05T15:55:00',
    '2021-10-05T16:00:00',
    '2021-10-05T16:05:00',
    '2021-10-05T16:10:00',
    '2021-10-05T16:15:00',
    '2021-10-05T16:20:00',
    '2021-10-05T16:25:00',
    '2021-10-05T16:30:00',
    '2021-10-05T16:35:00',
    '2021-10-05T16:40:00',
    '2021-10-05T16:45:00',
    '2021-10-05T16:50:00',
    '2021-10-05T16:55:00',
    '2021-10-05T17:00:00',
    '2021-10-05T17:05:00',
    '2021-10-05T17:10:00',
    '2021-10-05T17:15:00',
    '2021-10-05T17:20:00',
    '2021-10-05T17:25:00',
    '2021-10-05T17:30:00',
    '2021-10-05T17:35:00',
    '2021-10-05T17:40:00',
    '2021-10-05T17:45:00',
    '2021-10-05T17:50:00',
    '2021-10-05T17:55:00',
    '2021-10-05T18:00:00',
    '2021-10-05T18:05:00',
    '2021-10-05T18:10:00',
    '2021-10-05T18:15:00',
    '2021-10-05T18:20:00',
    '2021-10-05T18:25:00',
    '2021-10-05T18:30:00',
    '2021-10-05T18:35:00',
    '2021-10-05T18:40:00',
    '2021-10-05T18:45:00',
    '2021-10-05T18:50:00',
    '2021-10-05T18:55:00',
    '2021-10-05T19:00:00',
    '2021-10-05T19:05:00',
    '2021-10-05T19:10:00',
    '2021-10-05T19:15:00',
    '2021-10-05T19:20:00',
    '2021-10-05T19:25:00',
    '2021-10-05T19:30:00',
    '2021-10-05T19:35:00',
    '2021-10-05T19:40:00',
    '2021-10-05T19:45:00',
    '2021-10-05T19:50:00',
    '2021-10-05T19:55:00',
    '2021-10-05T20:00:00',
    '2021-10-05T20:05:00',
    '2021-10-05T20:10:00',
    '2021-10-05T20:15:00',
    '2021-10-05T20:20:00',
    '2021-10-05T20:25:00',
    '2021-10-05T20:30:00',
    '2021-10-05T20:35:00',
    '2021-10-05T20:40:00',
    '2021-10-05T20:45:00',
    '2021-10-05T20:50:00',
    '2021-10-05T20:55:00',
    '2021-10-05T21:00:00',
    '2021-10-05T21:05:00',
    '2021-10-05T21:10:00',
    '2021-10-05T21:15:00',
    '2021-10-05T21:20:00',
    '2021-10-05T21:25:00',
    '2021-10-05T21:30:00',
    '2021-10-05T21:35:00',
    '2021-10-05T21:40:00',
    '2021-10-05T21:45:00',
    '2021-10-05T21:50:00',
    '2021-10-05T21:55:00',
    '2021-10-05T22:00:00',
    '2021-10-05T22:05:00',
    '2021-10-05T22:10:00',
    '2021-10-05T22:15:00',
    '2021-10-05T22:20:00',
    '2021-10-05T22:25:00',
    '2021-10-05T22:30:00',
    '2021-10-05T22:35:00',
    '2021-10-05T22:40:00',
    '2021-10-05T22:45:00',
    '2021-10-05T22:50:00',
    '2021-10-05T22:55:00',
    '2021-10-05T23:00:00',
    '2021-10-05T23:05:00',
    '2021-10-05T23:10:00',
    '2021-10-05T23:15:00',
    '2021-10-05T23:20:00',
    '2021-10-05T23:25:00',
    '2021-10-05T23:30:00',
    '2021-10-05T23:35:00',
    '2021-10-05T23:40:00',
    '2021-10-05T23:45:00',
    '2021-10-05T23:50:00',
    '2021-10-05T23:55:00',
  ],
  status: [
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'online',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
    'offline',
  ],
};

export const Default = Template.bind({});
Default.args = {
  id: 'lineSeries',
  chartdata,
};

export const LabelsCustom = Template.bind({});
LabelsCustom.args = {
  id: 'LineSeriesCustom',
  chartdata,
  leftLabelString: 'Kilowatts',
  tooltipPrepend: 'Teste',
  tooltipAppend: 'KW',
};
