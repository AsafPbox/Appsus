// export const EVENT_PUK = 'puk';
// export const EVENT_SHOW_MSG = 'showMsg';

const eventBus = new Vue();

export default eventBus;

// eventBus.$on(EVENT_PUK, (num)=>{
//     console.log('Got a Puk!', num);

//     const msg = {
//         txt: 'Got a Puk!',
//         type: 'danger'
//     }

//     eventBus.$emit(EVENT_SHOW_MSG, msg)
// })

