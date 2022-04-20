import React from 'react';
import { render, screen } from '@testing-library/react';
import NoteCreator from '../components/NoteCreator';

test('renders NoteCreator', () => {
    render(<NoteCreator triggerRefresh={() => {}}/>);
    const noteCreator = screen.getByTestId('noteCreator');
    expect(noteCreator).toBeInTheDocument();
});
