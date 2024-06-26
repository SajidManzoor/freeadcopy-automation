import searchPopupElement from "../PageElements/searchPopupElement"
import dashBoardElements from "../PageElements/dashBoardElements";

const searchElement = new searchPopupElement()
const dashboardElement = new dashBoardElements()
let t=5000;

export default class searchPopupMethods {
    selectEmailTag(){
        cy.wait(2000)
        searchElement.element.emailTag().click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .flex-col > .ml-7')
        .should('have.text','Email Copy')
    }
    enterTemplateName(){
        // cy.wait(2000)
        cy.get('.mx-2 > :nth-child(1) > .cursor-pointer > .flex').invoke('text').then((text) => {
            this.template = text.trim()
            dashboardElement.element.searchField().type(text)
            //expect(text.trim()).equal('Wildness')
        });
    }
    selectMatchingResult() {

        cy.get('.mx-2 > :nth-child(1) > .cursor-pointer > .flex')
        .should('have.text',this.template)
        .click()
        //searchElement.element.searchResult().click({force:true})
    }
    verifyTemplate(){
        cy.get('.text-\\[16px\\]')
        //.should('be.visible')
        .should('have.text',this.template)
    }

    selectFacebookTag(){
        searchElement.element.facebookTag().click({force:true,timeout:t})
        cy.wait(2000)
        // searchElement.element.facebookTag().should('have.class', 'bg-[#77b9e8]/20')
        cy.get(':nth-child(1) > .flex-col > .ml-7')
        .should('have.text','Facebook Ads')
        
    }
 
    /*selectFacebookTag1(){
        searchElement.element.facebookTag().click({force:true})
        //cy.wait(6000)
        cy.get(':nth-child(1) > .flex-col > .ml-7')
        .should('have.text','Facebook Ads')
        //cy.wait(16000)
        
    }*/
    selectYoutubeTag(){
        searchElement.element.youtubeTag().click({force:true,timeout:t})
        cy.wait(2000)
         cy.get(':nth-child(1) > .flex-col > .ml-7')
         .should('have.text', 'YouTube Ads')
    }

    selectMiscTag(){
        searchElement.element.miscTag().click({force:true,timeout:t})
        cy.wait(2000)
        cy.get(':nth-child(1) > .flex-col > .ml-7')
        .should('have.text', 'Misc')
    }

    selectMarketRshTag(){
        searchElement.element.marketRshTag().click({force:true,timeout:t})
        cy.wait(2000)
        cy.get(':nth-child(1) > .flex-col > .ml-7')
        .should('have.text', 'Market Research')
    }

    selectAdvertorialTag(){
        searchElement.element.advertorialTag().click({force:true,timeout:t})
        cy.wait(2000)
        cy.get(':nth-child(1) > .flex-col > .ml-7')
        .should('have.text', 'Advertorial Ads')
    }
}

