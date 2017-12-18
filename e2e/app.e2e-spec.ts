import { PatrimonioUiPage } from './app.po';

describe('patrimonio-ui App', () => {
  let page: PatrimonioUiPage;

  beforeEach(() => {
    page = new PatrimonioUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
