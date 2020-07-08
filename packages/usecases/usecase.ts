/*
    add a sample use case
*/

export default function buildAddSample (e: any){
    return function addSample(){
        const sample = e.makeSample();
        // write to db 
        console.log(sample);
        
    }
}