import { Ang2LearningPage } from './app.po';

describe('ang2-learning App', function() {
  let page: Ang2LearningPage;

  beforeEach(() => {
    page = new Ang2LearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
