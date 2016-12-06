import { Angular2formsPage } from './app.po';

describe('angular2forms App', function() {
  let page: Angular2formsPage;

  beforeEach(() => {
    page = new Angular2formsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
