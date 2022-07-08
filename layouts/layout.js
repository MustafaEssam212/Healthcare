
import Head from "next/head";
import Side from "../components/side";
import MobileSide from "../components/mobileSide";

const Layout = ({children}) => {
    return(
        <div>

            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" ></script>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

            </Head>
            

            <MobileSide></MobileSide>

            <div className="LayoutContainer">

            <Side></Side>
           
            {children}

            </div>
            
        </div>
    )
}

export default Layout