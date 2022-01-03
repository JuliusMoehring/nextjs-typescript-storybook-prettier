module.exports = {
    stories: ['../src/components/**/*.stories.tsx'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
    core: {
        builder: 'webpack5',
    },
};
