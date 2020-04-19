import React from "react";
import bg from "./images/bg.jpg"
import { Row, Col, Container } from "reactstrap";
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-train-station.css'


const Home = () => {
    return (
        <>
            <div style={styles.home} className={"row  align-items-center"}>
                <h1 className={"col-12 text-center text-warning display-3 font-weight-bold"}>
                    Online Fundraising Fest
                </h1>
                <p className={"col-12 text-center text-white"} style={{ fontSize: "20px" }}>
                    تمتع بغرامك وعاون بلادك... في 7 أيام و 7 ليالي
            </p>
                <div className={"col-12 text-center"}>
                    <CustomOdometer />
                </div>
            </div>
            <div style={styles.partners}>
                <Container>
                    <Row>
                        <Col xs="12" md="2">
                            <img src="assets/images/sob.png" height="90" />
                        </Col>
                        <Col xs="12" md="2">
                            <img src="assets/images/foot24.jfif" height="90" />
                        </Col>
                        <Col xs="12" md="2">
                            <img src="assets/images/Artify.png" height="90" />
                        </Col>
                        <Col xs="12" md="2">
                            <img src="assets/images/teskerti.jpg" height="90" />
                        </Col>
                        <Col xs="12" md="2">
                            <img src="assets/images/logo_tunisie.jpg" height="90" />
                        </Col>
                        <Col xs="12" md="2" className={"h1"}>
                        بالاشتراك مع
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}


const styles = {
    home: {
        height: "70vh",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
    },
    partners: {
        height: "120",
        backgroundColor: "#efecec",
        padding:"15px 0 15px 0"
    }
}

export default Home;

class CustomOdometer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    componentDidMount() {
        this.setState({ value: 45091018 })
    }

    render() {
        return (
            <Odometer value={this.state.value} format="(.ddd)" duration={3000} />
        )
    }
}