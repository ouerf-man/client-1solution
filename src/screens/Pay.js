import React, { Component } from "react";
import Axios from "axios";
import {connect} from "react-redux"
class Pay extends Component {
    constructor(props) {
        super(props)
        let date = new Date()
        this.state = {
            countdown: 2000,
            date: date.toISOString(),
            client: "",
            email: "",
            nCarte: "",
            montant: 3,
            ccv: "",
            expireDate: "",
            event:this.props.match.params.id
        }
    }
    componentDidMount() {
        console.log(this.props.auth.user.id)
    
    }
    componentDidUpdate() {
        if (this.state.countdown < 0) {
            this.props.history.push("/program");
        }
    }

    handleSubmit(e){
        e.preventDefault()
        Axios.post('/api/events/pay',{id:this.state.event,user:this.props.auth.user.id})
        .then(()=>{
            this.props.history.push("/program");
        })
    }

    render() {
        return (
            <>
                <p>Récapitulatif de votre commande</p>
                <div class="commande">
                    <div>code du spectable : {this.state.event}</div>
                    <div>Montant à payer : </div>
                    <div>Date de paiement : {this.state.date}</div>
                </div>

                <div class="wrapper-s">
                    <div class="container-salma">
                        <form onSubmit={(e)=> this.handleSubmit(e)}>
                            <div class="title-salma-2">le paiement expire dans <span>{this.state.countdown}</span> </div>

                            <div class="input-form-s">
                                <div class="section-1-s">
                                    <div class="items">
                                        <input type="text" required class="input" placeholder="client" />
                                    </div>
                                    <div class="items">
                                        <input type="text" required class="input" placeholder="Email" />
                                    </div>
                                    <div class="items">
                                        <input type="text" required class="input" maxlength="16" data-mask="0000 0000 0000 0000" placeholder="N carte" />
                                    </div>

                                    <div class="items">
                                        <input type="number" required class="input" value={15} placeholder="Montant" />
                                    </div>
                                </div>
                                <div class="section-2-s">
                                    <div class="items">
                                        <input type="text" required class="input" placeholder="CCV2/identifiant internet" />
                                    </div>
                                </div>
                                <div class="section-3-s">
                                    <div class="items">
                                        <label class="label">Expire date</label>
                                        <input type="text" required class="input" data-mask="00 / 00" placeholder="MM / YY" />
                                    </div>

                                </div>
                            </div>
                            <button className="btn btn-primary btn-lg">Payer</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(Pay)