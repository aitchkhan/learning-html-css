import { LearnHtmlCssPage } from './app.po';

describe('learn-html-css App', () => {
  let page: LearnHtmlCssPage;

  beforeEach(() => {
    page = new LearnHtmlCssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
