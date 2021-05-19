<template>
  <div>
    <svg
      class="circle-chart"
      viewBox="0 0 144 144"
      width="144"
      height="144"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        stroke="#eee"
        :stroke-width="strokeWidth"
        fill="none"
        :cx="cx"
        :cy="cy"
        :r="radius"
      />
      <circle
        :stroke="color"
        :stroke-width="strokeWidth"
        fill="none"
        :cx="cx"
        :cy="cy"
        :r="radius"
        :stroke-dasharray="percent + ', 383'"
        class="circle-chart__circle"
      />
      <g class="info">
        <text
          class="circle-chart__percent"
          :x="cx"
          :y="cy"
          alignment-baseline="central"
          text-anchor="middle"
          :fill="color"
        >
          {{ range }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChartCircle',

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Specify range total circle */
    rangeTotal: {
      type: [String, Number],
      required: true,
    },

    /** Specify current range */
    range: {
      type: [String, Number],
      required: true,
    },

    /** Specify color range */
    color: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      cx: 72,
      cy: 72,
      radius: 61,
      strokeWidth: 20,
    };
  },

  computed: {
    circumference() {
      return this.radius * 2 * Math.PI;
    },

    percent() {
      return (this.range / this.rangeTotal) * this.circumference;
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  max-width: 200px;
}

.circle-chart__circle {
  animation: circle-chart-fill 2s reverse cubic-bezier(0, 0, 1, 0.2);
  transform: rotate(-90deg);
  transform-origin: center;
}

.info {
  animation: circle-chart-appear 2s forwards;
  transform: translateY(0.3em);
  font-size: 40px;
  @apply font-rubik font-medium;
}

@keyframes circle-chart-fill {
  to {
    stroke-dasharray: 0 383;
  }
}

@keyframes circle-chart-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
