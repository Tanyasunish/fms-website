import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders the home page with brand, hero and pillars', async () => {
    render(<App />);

    expect(screen.getByRole('link', { name: 'FEED MY SHEEP' })).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: 'FEED MY SHEEP' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '9 PILLARS OF FMS' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enquire about FMS MEDIA' })).toBeInTheDocument();
  });

  it('navigates to the media library', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('link', { name: 'MEDIA' }));

    expect(await screen.findByRole('heading', { name: 'FMS MEDIA LIBRARY' })).toBeInTheDocument();
  });

  it('shows all products when switching to the All filter on /publications', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('link', { name: 'PUBLICATIONS' }));
    await screen.findByRole('heading', { name: 'PUBLICATIONS & LIVING' });

    expect(screen.getAllByRole('button', { name: /order via whatsapp/i })).toHaveLength(2);

    await user.click(screen.getByRole('button', { name: 'all' }));

    expect(screen.getAllByRole('button', { name: /order via whatsapp/i })).toHaveLength(4);
  });
});
