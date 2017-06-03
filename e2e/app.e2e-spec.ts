import { SportVodPage } from './app.po';

describe('sport-vod App', () => {
  let page: SportVodPage;

  beforeEach(() => {
    page = new SportVodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
