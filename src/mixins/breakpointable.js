export default {
  data: () => ({
    viewportWidth: 0,
  }),

  mounted() {
    window.addEventListener('resize', this.setWidth);
    this.viewportWidth = this.viewportW();
  },

  destroyed() {
    window.removeEventListener('resize', this.setWidth);
  },

  computed: {
    breakpoint() {
      return this.breakpointByWidth(this.viewportWidth);
    },

    isMobileBreakpoint() {
      return ['xs', 'sm', 'md'].includes(this.breakpoint);
    },

    isTabletBreakpoint() {
      return this.breakpoint === 'md';
    },

    isDesktopBreakpoint() {
      return !this.isMobileBreakpoint;
    },
  },

  methods: {
    setWidth() {
      this.viewportWidth = this.viewportW();
    },
    viewportW() {
      const win = typeof window != 'undefined' && window;
      const doc =
        typeof document != 'undefined' && document && document.documentElement;

      const clientW = doc['clientWidth'];
      const innerW = win['innerWidth'];

      return clientW < innerW ? innerW : clientW;
    },

    breakpointByWidth(width) {
      if (width > 0 && width < 576) return 'xs';
      if (width >= 576 && width < 768) return 'sm';
      if (width >= 768 && width < 992) return 'md';
      if (width >= 992 && width < 1200) return 'lg';
      return 'xl';
    },
  },
};
