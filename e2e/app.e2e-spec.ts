import { CvingPage } from './app.po';

describe('cving App', function() {
  let page: CvingPage;

  beforeEach(() => {
    page = new CvingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
