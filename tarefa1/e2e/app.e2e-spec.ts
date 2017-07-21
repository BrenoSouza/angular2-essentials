import { Tarefa1Page } from './app.po';

describe('tarefa1 App', () => {
  let page: Tarefa1Page;

  beforeEach(() => {
    page = new Tarefa1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
