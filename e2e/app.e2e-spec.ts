import { AngualrRedittPage } from './app.po';

describe('angualr-reditt App', () => {
  let page: AngualrRedittPage;

  beforeEach(() => {
    page = new AngualrRedittPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
