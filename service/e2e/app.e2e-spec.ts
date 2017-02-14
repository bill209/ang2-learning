import { ServicesStartPage } from './app.po';

describe('services-start App', function() {
  let page: ServicesStartPage;

  beforeEach(() => {
    page = new ServicesStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
