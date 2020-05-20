import { addSample } from './sampleRoute'





export function startServer() {
    console.log('server started');
    addSample();
    console.log('sample added')
}

function configProduct( e) {
    e.get('/product/:id');









    return;
}