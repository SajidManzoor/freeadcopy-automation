///<reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homePageMethods from "../../PageObjects/PageMethods/homePageMethods";
import loginPageMethods from "../../PageObjects/PageMethods/loginPageMethods";
import dashBoardMethods from "../../PageObjects/PageMethods/dashBoardMethods";
import searchPopupMethods from "../../PageObjects/PageMethods/searchPopupMethods";

const homepage = new homePageMethods()
const loginpage = new loginPageMethods()
const dashboard = new dashBoardMethods()
const searchPopup = new searchPopupMethods()

//Scenario: User is able to search email template by selecting tag.
When(/^Login to app and click on the searchfield from header.$/, function () {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()

});


//Email tag
When(/^Select Email tag and type template name.$/, () => {	
	dashboard.clickSearchTemplate()
	searchPopup.selectEmailTag()
	searchPopup.enterTemplateName()
});

Then(/^Select email template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});

//Scenario: User is able to search facebook template by selecting tag.
When(/^Select Facebook tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectFacebookTag()
	searchPopup.enterTemplateName()
});

Then(/^Select FB template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});

//Scenario: User is able to search youtube template by selecting tag.
When(/^Select YouTube tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectYoutubeTag()
	searchPopup.enterTemplateName()
});

Then(/^Select YouTube template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});

//Scenario: User is able to search Misc template by selecting tag.
When(/^Select Misc tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectMiscTag()
	searchPopup.enterTemplateName()
});

Then(/^Select Misc template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});

//Scenario: User is able to search Market Research template by selecting tag.
When(/^Select Market Research tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectMarketRshTag()
	searchPopup.enterTemplateName()
});

Then(/^Select Market Research template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});

//Scenario: User is able to search advertorial template by selecting tag.
When(/^Select Advertorial tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectAdvertorialTag()
	searchPopup.enterTemplateName()
});

Then(/^Select Advertorial template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});







/*describe.only('Search Popup', () => {

		it.only('Search Template', function() {
				homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
	dashboard.searchTemplate()
	searchPopup.selectEmailTag()
	searchPopup.enterTemplateName()
	dashboard.selectMatchingResult()
	dashboard.verifyTemplate()	
		})
})*/