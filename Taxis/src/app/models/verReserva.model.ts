import { date } from '@rxweb/reactive-form-validators';
export class verReserva{
    constructor(          
        public id_reserva?:number,
        public nom_usuari?: string,
        public correu_electronic? :string, 
        public empresa_taxi?: string,
        public nom_parada?: number,
        public fecha_reserva?: any,      
         ){

    }
}