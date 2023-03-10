// YourComponent.stories.js

import HkCard from './HkCard.vue';

//π This default export determines where your story goes in the story list
export default {
    /* π The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Design System/Atoms/HkCard',
    component: HkCard,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => ({
    components: { HkCard },
    setup() {
        //π The args will now be passed down to the template
        return { args };
    },
    template: `<HkCard v-bind="args">
    Lorem Ipsum Card details
    </HkCard>`,
});

export const Prime = Template.bind({});

Prime.args = {
    /* π The args you need here will depend on your component */
    title: 'Example Card',
    width: '50%',
    footer: 'Β©2023 HotelKey Corporation'
};

