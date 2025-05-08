import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      // NOTE
      // if commented out, the permissions are applied
      // but if using resolvePermissions with `insert` option, the permissions are not applied
      // permissions: {
      //   insert: false,
      // },
      resolvePermissions: async (data, params) => {
        return {
          insert: false,
        };
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
  },
};

export default config;
