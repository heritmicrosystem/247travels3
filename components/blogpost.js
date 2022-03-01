import Image from "next/image";
import Link from 'next/link';
import canoePaddle from "../public/canoe-paddling.webp";
import waterFall from "../public/waterfall.webp";
import icelandWaterfall from "../public/iceland-waterfall.webp";

const Blogpost = () => {

    const currentDate = new Date().getDate();
    const today = new Date();
        let currentMonth = today.toLocaleString('default', { month:'short'});
    const currentYear = new Date().getFullYear();

    return ( 
        <>
        <div className="container ">
            <h3 className="blog-header">Blog Post</h3>
        </div>
            <div className=" blog-parent container mb-3 mt-3">
                <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="blog-card position-relative">
                        <div className="card blog-post-card">
                        <div className='date-wrapper position-absolute'>
                            <span style={{padding:"0rem", backgroundColor: "#0043a4", fontWeight: "600" , color: "white"}}>{currentMonth} <span style={{fontWeight:"700", fontSize: "25px"}}>{currentDate}</span>{currentYear}</span>
                        </div>
                        <Image
                        src={canoePaddle}
                        class="card-img-top"
                        alt={"canoe-paddling-vacation"}
                        />
                        <div className="card-body">
                        <h5 className="card-title">
                            10 Best Places to Travel to in May for vacation
                        </h5>
                        <p className="card-text">
                            Got free time off your busy schedule and looking for the
                            best places to spend it? We have prepared the carribean for
                            you.
                        </p>
                        <Link href="#">
                            <a className="btn btn-primary-custom">Read More</a>
                        </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="blog-card position-relative">
                    <div className="card blog-post-card">
                    <div className="date-wrapper position-absolute">
                            <span style={{padding:"0rem", backgroundColor: "#0043a4", fontWeight: "600" , color: "white"}}>{currentMonth} <span style={{fontWeight:"700", fontSize: "25px"}}>{currentDate}</span>{currentYear}</span>
                        </div>
                        <Image
                        src={icelandWaterfall}
                        class="card-img-top"
                        alt={"waterfall-iceland-vacation"}
                        />
                        <div className="card-body">
                        <h5 className="card-title">
                            When is the Best Time to Travel to Iceland?
                        </h5>
                        <p className="card-text">
                            If you &amp;re really inspired to travel to Iceland as your next
                            holiday destination, you may be wondering when…
                        </p>
                        <Link href="#">
                            <a className="btn btn-primary-custom">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="blog-card position-relative">
                    <div className="card blog-post-card">
                    <div  className="date-wrapper position-absolute">
                            <span style={{padding:"0rem", backgroundColor: "#0043a4", fontWeight: "600" , color: "white"}}>{currentMonth} <span style={{fontWeight:"700", fontSize: "25px"}}>{currentDate}</span>{currentYear}</span>
                        </div>
                        <Image
                        src={waterFall}
                        class="card-img-top"
                        alt={"waterfall-vacation"}
                        />
                        <div className="card-body">
                        <h5 className="card-title">
                            10 Most Exotic Places to Travel to in 2022
                        </h5>
                        <p className="card-text">
                            What do you think of when you hear about exotic places?
                            Areas containing nature&amp;s most beautiful features? The…
                        </p>
                        <Link href="#">
                            <a className="btn btn-primary-custom">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
     );
}
 
export default Blogpost;