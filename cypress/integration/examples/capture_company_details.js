describe ('QA Engineer - Reach - Capture company details on company names - Home screen', () => {
    it('Should load pharmaceutical company names', () => {
        cy.visit('https://www.medicines.org.uk/emc/browse-companies')
    })
    it('Should check for header on page', () => {
        cy.get('h1').should('be.visible').contains('Browse pharmaceutical company names')
    })
    it('Click on first company, check page and capture company details', () => {
        cy.get('.ieleft > ul > :nth-child(9) > .key').click()
        cy.get('h1').should('be.visible').contains('Alan Pharmaceuticals')
        cy.downloadFile('https://www.medicines.org.uk/emc/images/logo/3980','mydownloads','logo.jpg')
        cy.writeFile('Alan_Pharmaceutical.json', {logosrcname: 'src="/emc/images/logo/3980"', Name: 'Alan Pharmaceuticals', address: 'Highgate Business Centre, 33 Greenwood Place, London, London, NW5 1LB, UK', telephone: '0207 284 2887', email: 'info@alanpharma.com', website: 'http://www.alanpharmaceuticals.com', fax: '0207 267 9841', directline: '0207 284 2887'})
        cy.readFile('Alan_Pharmaceutical.json').its('Name',).should('eq', 'Alan Pharmaceuticals')
        cy.get('.nav>:nth-child(3)>a').click()
    })
    it('Click on second company, check page and capture company details', () => {
        cy.get('.ieright>ul>:nth-child(10)>.key').click()
        cy.get('h1').should('be.visible').contains('Aspen')
        cy.downloadFile('https://www.medicines.org.uk/emc/images/logo/2955','mydownloads','logo2.jpg')
        cy.writeFile('Aspen.json', {logosrcname: 'src="/emc/images/logo/2955"', Name: 'Aspen', address: '3016 Lake Drive, Citywest Business Campus, Dublin 24, Ireland', telephone: '+ 44 1748 828 391', email: 'info@alanpharma.com', directline: '0800 0087 392'})
        cy.readFile('Aspen.json').its('Name',).should('eq', 'Aspen')
        cy.get('.nav>:nth-child(3)>a').click()
    })
    it('Click on second company, check page and capture company details', () => {
        cy.get(':nth-child(19)>a').click()
        cy.get('.ieright>ul>:nth-child(6)>.key').click()
        cy.get('h1').should('be.visible').contains('RPH Pharmaceuticals AB')
        cy.writeFile('RPH_Pharmaceuticals_AB.json', { Name: 'RPH Pharmaceuticals AB', address: 'Lagervagen 7, Jordbro, Sweden', telephone: '+44 (0)845 023 0467', email: 'customer.care@recipharm.com', medical_Information_email: 'safety@elc-group.com', directline: '+44(0)845 023 0467', stock_Availability: '+44(0)845 023 0467'})
        cy.readFile('RPH_Pharmaceuticals_AB.json').its('Name',).should('eq', 'RPH Pharmaceuticals AB')
        cy.get('.nav>:nth-child(3)>a').click()
    })
})

