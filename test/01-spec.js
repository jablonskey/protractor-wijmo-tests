describe('FlexGrid page', function() {
    beforeAll(function(){
        browser.ignoreSynchronization = false;
    });

    beforeEach(function(){
        browser.get('http://demos.wijmo.com/5/angular2/explorer/explorer/#/grid/intro');
    });
    
    it('should have Wijmo in a  title', function() {
        var expectedTitle = "Wijmo";
               
               
        var pageTitle = browser.driver.getTitle();
        
        expect(pageTitle).toContain(expectedTitle);
    });

    fit('should have FlexGrid element visible', function(){
        // selectNumber(5);
        validateRowCount("//div[@class='wj-row' and @role='row']", 5);
    });
    
    function selectNumber(number){
      element.all(by.xpath("//div[@class='wj-form-control'  and contains(text(),'Items: ')]")).click();
      element.all(by.xpath(".//*[@id='_dropdown']/div/div[text()='"+number+"']")).click();
    }

    function validateRowCount(locator, rowCount){
        expect((element.all(by.xpath(locator))).count()).toBe(rowCount);
    }
});