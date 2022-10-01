const datVe = []

export const datVeReducer  = (state = datVe, action) => {
    switch (action.type) {
        case "THEM_GHE":
            let gheFind = state.find((ghe) => { 
                return ghe.soGhe === action.ticket.soGhe
             })
             if(!gheFind && action.ticket.daDat == false){
                let gheTicket = {...action.ticket, order: true}
                state.push(gheTicket);
             }
            return [...state];
        case "XOA_GHE":
            let ticketUpdate = state.filter((ve) => { 
                return ve.soGhe !== action.veXoa
             })
             state = ticketUpdate;
            return state;
        default:
            return state;
    }
}