import { WebTechNg2Page } from './app.po';

describe('web-tech-ng2 App', function() {
  let page: WebTechNg2Page;

  beforeEach(() => {
    page = new WebTechNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
