import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CarList } from './index'

it('should have a list of cars', () => {
    const { container } = render(
        <MemoryRouter>
            <CarList />
        </MemoryRouter>
    );
    const listEl = container.getElementsByClassName('list');
    expect(listEl.length).toBeGreaterThan(0);
});
it('should have five cars in the list', () => {
    const { container } = render(
        <MemoryRouter>
            <CarList />
        </MemoryRouter>
    );
    const countCar = container.getElementsByClassName('carItem');
    expect(countCar.length).toEqual(5);
})

export {};