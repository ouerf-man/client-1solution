import React from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import main from "../utils/js/main"
import { connect } from "react-redux"
class Program extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            event: {
                users:[]
            }
        }
    }

    handleClick(evn) {
        this.setState({ event: evn })
        
    }

    componentDidMount() {
        if (window.localStorage) {
            if (!localStorage.getItem('firstLoad')) {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else
                localStorage.removeItem('firstLoad');
        }
        Axios.get("/api/events")
            .then(data => data.data)
            .then((result) => {
                if (result.success) {
                    this.setState({ events: result.data })
                    console.log(result.data)
                }
                main();
            })
    }
    render() {

        return (
            <div>
                <h1 className={"text-center"}>
                    -البرنامج-
                </h1>
                <div className="cd-schedule cd-schedule--loading margin-top-lg margin-bottom-lg js-cd-schedule">
                    <div className="cd-schedule__timeline">
                        <ul>

                            <li><span>12:00</span></li>
                            <li><span>12:30</span></li>
                            <li><span>13:00</span></li>
                            <li><span>13:30</span></li>
                            <li><span>14:00</span></li>
                            <li><span>14:30</span></li>
                            <li><span>15:00</span></li>
                            <li><span>15:30</span></li>
                            <li><span>16:00</span></li>
                            <li><span>16:30</span></li>
                            <li><span>17:00</span></li>
                            <li><span>17:30</span></li>
                            <li><span>18:00</span></li>
                            <li><span>18:30</span></li>
                            <li><span>19:00</span></li>
                            <li><span>19:30</span></li>
                            <li><span>20:00</span></li>
                            <li><span>20:30</span></li>
                            <li><span>21:00</span></li>
                            <li><span>21:30</span></li>
                            <li><span>22:00</span></li>
                            <li><span>22:30</span></li>
                        </ul>
                    </div>
                    <div className="cd-schedule__events">
                        <ul>
                            <li className="cd-schedule__group">
                                <div className="cd-schedule__top-info"><span>Monday</span></div>

                                <ul>
                                    {
                                        this.state.events.filter((el) => el.jour == 0).map((evn, i) => {
                                            return (
                                                <li className="cd-schedule__event" key={i}>
                                                    <a onClick={() => this.handleClick(evn)} data-start={evn.dateStart} data-end={evn.dateEnd} data-content={evn.description} data-event={`event-${Math.floor(Math.random() * 4) + 1}`} href="#0">
                                                        <em className="cd-schedule__name">{evn.event}</em>
                                                        <small>{evn.par}</small>
                                                    </a>
                                                </li>)
                                        })
                                    }
                                </ul>
                            </li>

                            <li className="cd-schedule__group">
                                <div className="cd-schedule__top-info"><span>Tuesday</span></div>

                                <ul>
                                    {
                                        this.state.events.filter((el) => el.jour == 1).map((evn, i) => {
                                            return (
                                                <li className="cd-schedule__event" key={i}>
                                                    <a onClick={() => this.handleClick(evn)} data-start={evn.dateStart} data-end={evn.dateEnd} data-content={evn.description} data-event={`event-${Math.floor(Math.random() * 4) + 1}`} href="#0">
                                                        <em className="cd-schedule__name">{evn.event}</em>
                                                        <small className={"cd-schedule__name"}>{evn.par}</small>
                                                    </a>
                                                </li>)
                                        })
                                    }
                                </ul>
                            </li>

                            <li className="cd-schedule__group">
                                <div className="cd-schedule__top-info"><span>Wednesday</span></div>
                                <ul>
                                    {
                                        this.state.events.filter((el) => el.jour == 2).map((evn, i) => {
                                            return (
                                                <li className="cd-schedule__event" key={i}>
                                                    <a data-start={evn.dateStart} data-end={evn.dateEnd} data-content={evn.description} data-event={`event-${Math.floor(Math.random() * 4) + 1}`} onClick={() => this.handleClick(evn)} href="#0" >
                                                        <em className="cd-schedule__name">{evn.event}</em>
                                                        <small className={"cd-schedule__name"}>{evn.par}</small>
                                                    </a>
                                                </li>)
                                        })
                                    }
                                </ul>
                            </li>

                            <li className="cd-schedule__group">
                                <div className="cd-schedule__top-info"><span>Thursday</span></div>

                                <ul>
                                    {
                                        this.state.events.filter((el) => el.jour == 3).map((evn, i) => {
                                            return (
                                                <li className="cd-schedule__event" key={i}>
                                                    <a onClick={() => this.handleClick(evn)} data-start={evn.dateStart} data-end={evn.dateEnd} data-content={evn.description} data-event={`event-${Math.floor(Math.random() * 4) + 1}`} href="#0">
                                                        <em className="cd-schedule__name">{evn.event}</em>
                                                        <small className={"cd-schedule__name"}>{evn.par}</small>
                                                    </a>
                                                </li>)
                                        })
                                    }
                                </ul>
                            </li>

                            <li className="cd-schedule__group">
                                <div className="cd-schedule__top-info"><span>Friday</span></div>

                                <ul>
                                    {
                                        this.state.events.filter((el) => el.jour == 4).map((evn, i) => {
                                            return (
                                                <li className="cd-schedule__event" key={i}>
                                                    <a onClick={() => this.handleClick(evn)} data-start={evn.dateStart} data-end={evn.dateEnd} data-content={evn.description} data-event={`event-${Math.floor(Math.random() * 4) + 1}`} href="#0">
                                                        <em className="cd-schedule__name">{evn.event}</em>
                                                        <small className={"cd-schedule__name"}>{evn.par}</small>
                                                    </a>
                                                </li>)
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="cd-schedule__group">
                                <div className="cd-schedule__top-info"><span>Saturday</span></div>

                                <ul>
                                    {
                                        this.state.events.filter((el) => el.jour == 5).map((evn, i) => {
                                            return (
                                                <li className="cd-schedule__event" key={i}>
                                                    <a onClick={() => this.handleClick(evn)} data-start={evn.dateStart} data-end={evn.dateEnd} data-content={evn.description} data-event={`event-${Math.floor(Math.random() * 4) + 1}`} href="#0">
                                                        <em className="cd-schedule__name">{evn.event}</em>
                                                        <small className={"cd-schedule__name"}>{evn.par}</small>
                                                    </a>
                                                </li>)
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="cd-schedule__group">
                                <div className="cd-schedule__top-info"><span>Sunday</span></div>

                                <ul>
                                    {
                                        this.state.events.filter((el) => el.jour == 6).map((evn, i) => {
                                            return (
                                                <li className="cd-schedule__event" key={i}>
                                                    <a onClick={() => this.handleClick(evn)} data-start={evn.dateStart} data-end={evn.dateEnd} data-content={evn.description} data-event={`event-${Math.floor(Math.random() * 4) + 1}`} href="#0">
                                                        <em className="cd-schedule__name">{evn.event}</em>
                                                        <small className={"cd-schedule__name"}>{evn.par}</small>
                                                    </a>
                                                </li>)
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="cd-schedule-modal">
                        <header className="cd-schedule-modal__header">
                            <div className="cd-schedule-modal__content flex-lg-column d-flex justify-content-between align-items-start" style={styles.modalHeader}>
                                <div>
                                    <span className="cd-schedule-modal__date"></span>
                                    <h3 className="cd-schedule-modal__name"></h3>
                                </div>
                                {
                                    this.props.auth.isAuthenticated ?
                                         !this.state.event.users.some(el=>el==this.props.auth.user.id)?
                                            <Link to={{ pathname: `/pay/${this.state.event._id}`, state: { user: this.props.auth.user.id } }} >
                                            <button className="btn btn-light text-black">Buy Ticket</button>
                                            </Link>:
                                            <Link to={{ pathname: `/pay/${this.state.event._id}`, state: { user: this.props.auth.user.id } }} >
                                            <button className="btn btn-light text-black">Live page</button>
                                            </Link>
                                        
                                : <div></div>
                                }
                            </div>

                        <div className="cd-schedule-modal__header-bg"></div>
                        </header>

                    <div className="cd-schedule-modal__body">
                        <div className="cd-schedule-modal__event-info" style={styles.modalBody}></div>
                        <div className="cd-schedule-modal__body-bg" >

                        </div>
                    </div>

                    <a href="#0" className="cd-schedule-modal__close text-replace">Close</a>
                </div>

                <div className="cd-schedule__cover-layer"></div>
            </div>
            </div >
        )
    }
}

const styles = {
    modalBody: {
        padding: 50,
        fontSize: 18
    },
    modalHeader: {
        height: "80%"
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(Program)