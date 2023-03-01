// YourComponent.stories.js

import HkImage from './HkImage.vue';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Design System/Atoms/HkImage',
    component: HkImage,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
    components: { HkImage },
    setup() {
        //👇 The args will now be passed down to the template
        return { args };
    },
    template: `<HkImage v-bind="args" />`,
});

export const Prime = Template.bind({});

Prime.args = {
    /* 👇 The args you need here will depend on your component */
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2xlZXBpbmclMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    widthPercent: '50%',
    heightPercent: '50%',
};

