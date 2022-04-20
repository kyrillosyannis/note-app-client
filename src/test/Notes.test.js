import React from 'react';
import { render, screen } from '@testing-library/react';
import Notes from '../components/Notes';

test('renders Notes', () => {
    render(<Notes notes={[{'id': 1, 'content': 'this is a note', 'userId': 1}]}/>);
    const notes = screen.getByTestId('notes');
    expect(notes).toBeInTheDocument();
});
