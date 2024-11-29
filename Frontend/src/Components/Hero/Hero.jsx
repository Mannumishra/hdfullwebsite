import React from "react";
import "./hero.css";
import image from "../../Images/Re-MyCards-Credit-Debit-Card960x150.jpg";
import image2 from "../../Images/manageCreditImage.jpg";
import image1 from "../../Images/Referral-Banner.jpg";
import loan1 from "../../Images/loan1.jpg";
import loan2 from "../../Images/loan2.jpg";
import loan3 from "../../Images/loan3.jpg";
import sideImage from "../../Images/side1.jpg";
import sideImag2 from "../../Images/side2.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Hero = () => {
  var name =
    "Log-in to NetBanking >> Go to ‘Cards’>>Click on ‘Request’ >> Proceed to ‘Credit Limit Enhancement’";
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="banner">
          <div className="bannerContent">
            <ul>
              <li><a href="https://www.hdfcbank.com/"> Personal </a></li>
              <li className="text-dark">Pay</li>
              <li><a href="https://www.hdfcbank.com/personal/pay/cards"> Cards </a></li>
              <li><a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards"> Credit Cards </a></li>
              <li><a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/credit-card-services"> Credit Cards Services </a></li>
              <li className="text-dark"> Credit Card Limit Enhancement</li>
            </ul>
            <div className="bannerHeading">
              <h1>Increase Your Credit Card Limit For Free</h1>
              <p>Maximise your spending power instantly</p>
            </div>
          </div>
        </div>
        <section className="HomeSection mt-5">
          <div className="homesectionImage1">
            <a href="https://mycards.hdfcbank.com/?icid=website_target_CC_Page_LearningCentres_TopBanner_Allvisitor">
              <img src={image} alt="" />
            </a>
          </div>
          <div className="homesectionImage2">
            <a href="https://mycards.hdfcbank.com/?icid=website_target_CC_Page_LearningCentres_TopBanner_Allvisitor">
              <img className="w-100" src={image2} alt="" />
            </a>
          </div>

          <div className="increaseCardBtn">
            <button className="btn btn-primary"><a href="/personal_details">Increase Card</a></button>
          </div>
          <div className="row mt-3">
            <div className="col-md-9">
              <div className="home_contents">
                <p>
                  Whether you plan to make a large purchase, have an increased
                  spending capacity, want to create an emergency fund or build a
                  credit history, increasing your Credit Card limit can help you
                  do it all and more. Conveniently increase the maximum amount
                  you can spend on your Credit Card via NetBanking or Phone
                  Banking. What’s more, there are no charges to increasing the
                  card limit.
                </p>
              </div>
              <div className="home_contents mt-3">
                <div className="loanSection">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="applySection">
                        <img src={loan1} alt="" />
                        <br />
                        <a
                          href="/personal_details"
                        >
                          Apply For Increase Card
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="applySection">
                        <img src={loan2} alt="" />
                        <br />
                        <a
                          target="_blank"
                          href="https://mycards.hdfcbank.com/?lgcode=mktg&mc_id=Website_Organic_CC_netbanking"
                        >
                          Experience MyCards
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="applySection">
                        <img src={loan3} alt="" />
                        <br />

                        <a
                          target="_blank"
                          href="https://applyonline.hdfcbank.com/loan-against-assets/smartemi/smartemi?lgcode=mktg&mc_id=Website_Organic_CC_netbanking#nbb"
                        >
                          Apply for Smart EMI
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home_contents mt-3">
                <p>
                  Every Credit Card has a specific limit known as a Credit Card
                  limit – this usage limit is the maximum amount you can spend
                  using your Credit Card. The credit limit varies based on your
                  Credit Card type and eligibility.
                </p>
              </div>
              <div className="home_contents p-0 mt-3">
                <div className="info-tabs container">
                  <h5 className="mb-4 p-3">All You Need To Know</h5>
                  <ul className="nav nav-tabs" id="infoTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="features-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#features"
                        type="button"
                        role="tab"
                        aria-controls="features"
                        aria-selected="true"
                      >
                        Features
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="eligibility-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#eligibility"
                        type="button"
                        role="tab"
                        aria-controls="eligibility"
                        aria-selected="false"
                      >
                        Eligibility
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="fees-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#fees"
                        type="button"
                        role="tab"
                        aria-controls="fees"
                        aria-selected="false"
                      >
                        Fees and Charges
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content mt-4 p-3" id="infoTabsContent">
                    {/* Features Tab */}
                    <div
                      className="tab-pane fade show active"
                      id="features"
                      role="tabpanel"
                      aria-labelledby="features-tab"
                    >
                      <div className="tabs_content_main">
                        <div className="tabs_heading_div">
                          <p className="tabs_heading">
                            Raise your credit limit in a jiffy!
                          </p>
                        </div>

                        <div className="tabs_content_div">
                          <p>
                            For a special few, bank enhances credit limit based
                            on usage, repayment & spending power. Check your
                            eligibility in just 2 clicks right here.
                          </p>
                        </div>
                      </div>

                      <div className="tabs_content_main">
                        <div className="tabs_heading_div">
                          <p className="tabs_heading">
                            Why should you enhance your credit limit?
                          </p>
                        </div>
                        <div className="tabs_content_div">
                          <ul>
                            <li>
                              Instead of having multiple Credit Cards with
                              varying limit, increase your HDFC Bank Credit Card
                              limit to a higher amount for easy spending
                            </li>
                            <li>It improves your credit scores</li>
                            <li>
                              It gives you higher Reward Points consolidated on
                              one Card
                            </li>
                            <li>
                              It makes you eligible for a higher Loan on Credit
                              Card
                            </li>
                            <li>
                              Allows you upgrade to a premium Credit Card and
                              avail more benefits/rewards
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="tabs_content_main">
                        <div className="tabs_heading_div">
                          <p className="tabs_heading">
                            How to increase your credit limit?
                          </p>
                        </div>
                        <div className="tabs_content_div">
                          <p>
                            Enjoy a new credit limit in just 3 quick steps –
                            <a href="https://applyonline.hdfcbank.com/credit-cards/credit-card-limit-enhancement-form.html?icid=website_organic:LEprdpge#nbb">
                              click here
                            </a>
                          </p>
                          <ul>
                            <li>Verify your identity</li>
                            <li>Check eligible limit </li>
                            <li>Confirm</li>
                          </ul>
                        </div>
                      </div>

                      <div className="tabs_content_main">
                        <div className="tabs_heading_div">
                          <p className="tabs_heading">NetBanking</p>
                        </div>
                        <div className="tabs_content_div">
                          <p>{name}</p>
                          <p>
                            If you are eligible, you can place a request and
                            increase your credit limit.
                          </p>
                        </div>
                      </div>
                      <div className="tabs_content_main">
                        <div className="tabs_heading_div">
                          <p className="tabs_heading">Phone banking</p>
                        </div>
                        <div className="tabs_content_div">
                          <p>
                            You can also call our 24/7
                            <b>customer care number</b>
                            for assistance.
                          </p>
                          <p>
                            Or visit your nearest HDFC Bank branch for details
                            and enquiry on &nbsp;
                            <a href="/personal_details"> 
                              Credit Card
                            </a>
                            &nbsp;limit enhancement.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Eligibility Tab */}
                    <div
                      className="tab-pane fade"
                      id="eligibility"
                      role="tabpanel"
                      aria-labelledby="eligibility-tab"
                    >
                      <p>
                        <a href="https://applyonline.hdfcbank.com/credit-cards/credit-card-limit-enhancement-form.html?icid=website_organic:LEprdpge#nbb">
                          Click here &nbsp;
                        </a>
                        to check your eligibility for credit limit raise.
                      </p>
                    </div>

                    {/* Fees and Charges Tab */}
                    <div
                      className="tab-pane fade"
                      id="fees"
                      role="tabpanel"
                      aria-labelledby="fees-tab"
                    >
                      <p>No terms & conditions and zero hidden charges*</p>
                      <p>
                        Credit Card limit increase with HDFC Bank is absolutely
                        free!.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home_contents mt-3">
                <div className="faqSection">
                  <h3>Frequently Asked Questions</h3>
                  <p className="my-2">
                    Read here on tips to increase Credit Card Limit
                  </p>

                  <div className="faq_item">
                    <h5>
                      What Is Limit Enhancement/ Higher Limit on Credit Card?
                    </h5>
                    <p>
                      Limit Enhancement is increasing the credit limit on your
                      existing HDFC Bank Credit Card. For a special few, we
                      enhance credit card limits based on usage and repayment
                      record.
                    </p>
                  </div>

                  <div className="faq_item">
                    <h5>How can I check my Credit Card limit?</h5>
                    <ul>
                      <li>
                        <strong>Via NetBanking:</strong> You can log into your
                        bank's NetBanking portal. Head to the Credit Card
                        section and check your Credit Card limit details.
                      </li>
                      <li>
                        <strong>Via MobileBanking:</strong> Similar to
                        NetBanking, you can log into your Mobile Banking
                        platform, navigate to the Credit Card section, and view
                        your Credit Card summary.
                      </li>
                      <li>
                        <strong>Via Credit Card Statements:</strong> You can get
                        information on your Credit Card limit by simply checking
                        your Credit Card statements.
                      </li>
                      <li>
                        <strong>Via SMS:</strong> Typically, when you make a
                        Credit Card transaction, the card issuer sends a SMS
                        notification with the used credit limit, the available
                        credit limit and your actual credit limit. Keep an eye
                        on your Credit Card transaction notifications.
                      </li>
                      <li>
                        <strong>Via Phone Banking:</strong> You can call your
                        card issuer’s customer care, provide relevant
                        information and request for your Credit Card limit
                        information.
                      </li>
                    </ul>
                  </div>

                  <div className="faq_item">
                    <h5>How do I benefit from Limit Enhancement?</h5>
                    <p>
                      Here are the top 5 benefits you can enjoy with a higher
                      credit limit:
                    </p>
                    <ul>
                      <li>No hassles of managing multiple Credit Cards</li>
                      <li>Improved credit scores</li>
                      <li>Handy in case of emergencies</li>
                      <li>Possibility to upgrade to premium Credit Cards</li>
                      <li>Easy access to a higher loan on Credit Cards</li>
                    </ul>
                  </div>

                  <div className="faq_item">
                    <h5>
                      What are the Fee & charges for credit card limit
                      enhancement?
                    </h5>
                    <p>
                      Absolutely none! There are NO T&Cs and NO hidden charges
                      to increase the limit on your Credit Card. It is
                      absolutely FREE.
                    </p>
                  </div>

                  <div className="faq_item">
                    <h5>Is Limit Enhancement available on Add-on Cards?</h5>
                    <p>
                      No, limit enhancement facility is only available for the
                      Primary Cards.
                    </p>
                  </div>

                  <div className="faq_item">
                    <h5>Is there a way to limit spends?</h5>
                    <p>
                      Customers can have a cap on their spending limit after
                      increasing their credit limit. It is always advisable to
                      monitor your spends and utilize your increased credit
                      limit wisely.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home_contents mt-3">
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#444",
                    marginBottom: "2rem",
                  }}
                >
                  Related Search
                </h3>
                <div className="related_search">
                  <div>
                    <ul>
                      <li>
                        <a href="https://www.hdfcbank.com/personal/resources/learning-centre/pay/know-how-to-increase-credit-card-limit">
                          how to increase credit card limit
                        </a>
                      </li>
                      <li>
                        <a href="https://www.hdfcbank.com/personal/resources/learning-centre/pay/how-to-maintain-a-good-credit-score">
                          how to maintain credit score
                        </a>
                      </li>
                      <li>
                        <a href="https://www.hdfcbank.com/personal/resources/learning-centre/pay/a-complete-guide-on-cibil-score-for-credit-cards">
                          credit score for credit card
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://www.hdfcbank.com/personal/resources/learning-centre/pay/difference-between-upgrading-credit-card-and-increasing-credit-card-limit">
                          credit card upgrade means
                        </a>
                      </li>
                      <li>
                        <a href="https://www.hdfcbank.com/personal/resources/learning-centre/pay/a-complete-guide-on-cibil-score-for-credit-cards">
                          cibil score for credit card
                        </a>
                      </li>
                      <li>
                        <a href="https://www.hdfcbank.com/personal/resources/learning-centre/pay/how-to-build-your-credit-with-credit-card">
                          credit card tips to build credit
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-0">
              <div className="sideSectionMain">
                <div className="sideSection p-4">
                  <a
                    target="_blank"
                    href="https://www.gyftr.com/hdfcbank-referral-program/login?utm_channel=website_organic&utm_campaign=cc_referral_rhs"
                  >
                    <img src={image1} alt="" />
                  </a>
                </div>
              </div>
              <div className="sideSectionMain mt-3">
                <div className="sideSection sideimg2">
                  <p className="side_heading  mb-1">
                    How to increase your Credit Card limit
                  </p>
                  <a href="https://www.youtube.com/watch?v=V494N1afbCA" target="_blank">
                  <img src={sideImage} alt="" />
                  </a>
                </div>
              </div>
              <div className="sideSection">
                <div>
                  <p className="side_heading mb-1">Manage Your Credit Cards</p>
                  <hr />
                  <ul className="credit_card_list">
                    <li>
                      <a
                        target="_blank"
                        href="https://leads.hdfcbank.com/applications/webforms/apply/cc_track_revamp/index.aspx"
                      >
                        Track Your Credit Card
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/personal-mitc">
                        Personal MITC
                      </a>
                    </li>
                    <li>
                      <a href="#enable-autopay">Enable Autopay</a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/card-member-agreement-29-10-2019.pdf">
                        Retail Card Member Agreement
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/HDFC-Bank-Credit-Cards-Policy%20-Conditions-Ver-1-1st-July22.pdf">
                        Credit Cards Policy
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/dsa_cc.pdf">
                        DSA Code of Conduct
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/fair_practice.pdf">
                        Fair Practices Code
                      </a>
                    </li>
                    <li>
                      <a href="https://hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/TransactionAlerts.pdf">
                        Transaction Alerts
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/statement_related_payment_info.pdf">
                        Statement Payment Related Info
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/credit-card-services/credit-card-limit-enhancement">
                        Bill Value
                      </a>
                    </li>
                    <li>
                      <a href="https://v.hdfcbank.com/assets/popuppages/netbanking.html">
                        CC Monthly Statements
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/credit-card-services/credit-card-limit-enhancement">
                        Global Value
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/purchase-mitc">
                        Purchase MITC
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/credit-card-services/credit-card-limit-enhancement">
                        Secure Your Bank Cards with OneAssist
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/corporate-mitc">
                        Corporate MITC
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/my-rewards-oct-17.pdf">
                        MyRewards Program Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#pay-credit-card-bill">Pay Credit Card Bill</a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/credit-card-services/credit-card-limit-enhancement">
                        CC - Rewards Redemption Process
                      </a>
                    </li>
                    <li>
                      <a href="https://www.prioritypass.com/">Priority Pass</a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/Manage%20Your%20Credit%20Cards%20PDFs/Corporate%20Card_Cardmember%20Agreement.pdf">
                        Corporate Card Member Agreement
                      </a>
                    </li>
                    <li>
                      <a
                        target="blank"
                        href="https://v.hdfcbank.com/htdocs/common/cardless-cash/index.html"
                      >
                        Contactless Cards
                      </a>
                    </li>
                    <li>
                      <a href="#chip-pin-credit-card">Chip+PIN Credit Card</a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/Co-Brand-Credit-Card-Revenue-Sharing-disclosure.pdf">
                        Co-Brand Credit Card Revenue Sharing Disclosure
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/borrow/popular-loans#/easyemi-consumer-loans">
                        Easy EMI
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/Credit%20Cards/Commercial/KEY-FACT-STATEMENT(Commercial-Cards).pdf">
                        Key Fact Statement - Purchase Card
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/Credit%20Cards/Commercial/KEY-FACT-STATEMENT-Corp-Card.pdf">
                        Key Fact Statement - Corporate Card
                      </a>
                    </li>
                    <li>
                      <a href="#redeem-reward-points">Redeem Reward Points</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sideSection mt-3">
                <div>
                  <p className="side_heading mb-1">
                    Services for existing Credit Card Customers
                  </p>
                  <hr />
                  <ul className="credit_card_list">
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/credit-card-services/credit-card-referral-program?mc_id=rhs_cc&icid=rhs_cc">
                        Credit Card Referral Program
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/credit-card-services?mc_id=rhs_cc&icid=rhs_cc">
                        Credit Card Services
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/credit-card-services/credit-card-limit-enhancement?mc_id=rhs_cc&icid=rhs_cc">
                        Limit Enhancement
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/credit-card-services/credit-card-upgrade?mc_id=rhs_cc&icid=rhs_cc">
                        Upgrade Credit Card
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/List-of-Active-Digital-Channel-Partners.pdf">
                        Active Channel Partners
                      </a>
                    </li>
                    <li>
                      <a
                        target="blank"
                        href="https://mycards.hdfcbank.com/?mc_id=rhs_cc&icid=rhs_cc"
                      >
                        HDFC Bank MyCards
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/borrow/popular-loans/loan-on-credit-card?mc_id=rhs_cc&icid=rhs_cc">
                        Loan on Credit Card
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/ways-to-bank/online-banking/credit-card-netbanking?mc_id=rhs_cc&icid=rhs_cc">
                        Credit Card NetBanking
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/credit-card-emi-calculator?mc_id=rhs_cc&icid=rhs_cc">
                        Credit Card EMI Calculator
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/tools-and-calculators/balance-transfer-calculator?mc_id=rhs_cc&icid=rhs_cc">
                        Balance Transfer Calculator
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hdfcbank.com/personal/pay/cards/credit-cards/pay-credit-card-bill?mc_id=rhs_cc&icid=rhs_cc">
                        Credit Card Bill Payment
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sideSectionMain mt-3">
                <div className="sideSection text-center p-3">
                  <a href="https://www.hdfcbank.com/personal/resources/learning-centre/pay/benefits-of-credit-card-limit-increase">
                    <img className="side2" src={sideImag2} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
