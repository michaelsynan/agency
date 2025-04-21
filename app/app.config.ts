export default defineAppConfig({
  ui: {
    accordion: {
      slots: {
        content: "", // not useful
        body: "text-xl", // not useful
        label: "text-2xl", // header stuff
      },
    },
    notifications: {
      position: "top-0 bottom-0",
      background: "stone-900",
    },
    primary: "dino",
    toast: {
      slots: {
        root: "rounded-none bg-stone-900",
      },
    },

    card: {
      slots: {
        root: "rounded-[calc(var(--ui-radius)*2)]",
        header: "p-4 sm:px-6",
        body: "p-4 sm:p-6",
        footer: "p-4 sm:px-6",
      },
      variants: {
        variant: {
          solid: {
            root: "bg-(--ui-bg-inverted) text-green-900",
          },
          outline: {
            root: "bg-(--ui-bg) ring ring-(--ui-border) divide-y divide-(--ui-border)",
          },
          soft: {
            root: "bg-(--ui-bg-elevated)/50 divide-y divide-(--ui-border)",
          },
          subtle: {
            root: "bg-(--ui-bg-elevated)/50 ring ring-(--ui-border) divide-y divide-(--ui-border)",
          },
        },
      },
      defaultVariants: {
        variant: "outline",
      },
    },
  },
});
