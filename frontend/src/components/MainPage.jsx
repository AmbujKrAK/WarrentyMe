
import "./MainPage.css"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SavingsIcon from '@mui/icons-material/Savings';


export const MainPage = () => {
    return (
        <div className="contentContainer">
            <div className="card">
                    <span>Today's Money <AttachMoneyIcon/></span>
                    <span>$53,000</span>
                    <p><span className="green">+55%</span> since yesterday</p>
            </div>

            <div className="card">
                    <span>Today's Money <RequestQuoteIcon/></span>
                    <span>2,300</span>
                    <p><span className="green">+3%</span> since last week</p>
            </div>

            <div className="card">
                    <span>Today's Money <LocalAtmIcon/></span>
                    <span>+3,462</span>
                    <p><span className="red">-2%</span> since last quarter</p>
            </div>

            <div className="card">
                    <span>Today's Money <SavingsIcon/></span>
                    <span>$108,430</span>
                    <p><span className="green">+5%</span> than last month</p>
            </div>
           
        </div>
    )
}