import React from "react"
import { Row } from "reactstrap"

const Info = () => {
    return (
        <>
            <div id="titre-salma">
                <h5>    - كيفية المشاركة -</h5>
            </div>
            <div class="containsAll">
                <div class="container salma-c">
                    <Row>
                        <div class="item-salma col-xs-12 col-md-4">
                            <img src="assets/images/site.jpg" alt="" />
                            <div class="text-content"> تختار العروض الي تحب تحضرهم وتخلص قد ما تحب باش الفلوس تتصب لل 1818</div>
                        </div>
                        <div class="item-salma col-xs-12 col-md-4">
                            <img src="assets/images/icon2_1.png" alt="" />
                            <div class="text-content"> يجيك email فيه اسمك وكلمة سر لكل عرض اخترتو</div>

                        </div>
                        <div class="item-salma col-xs-12 col-md-4">
                            <img src="assets/images/image3.jpg" alt="" />
                            <div class="text-content"> تكونكتي بالمعطيات الي جاتك في الEmail تحل الlive وتشيخ مع صحابك</div>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Info