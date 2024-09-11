import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const renderComponent = (
  ui: React.ReactElement,
  options?: Parameters<typeof render>[1],
) => {
  return { ...render(ui, options), user: userEvent.setup() };
};
