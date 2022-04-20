import React from 'react';
import { render, screen } from '@testing-library/react';
import NoteHeader from '../components/NoteHeader';

test('renders NoteHeader', () => {
    render(<NoteHeader totalNumberOfNotes={3}/>);
    const noteHeader = screen.getByTestId('noteHeader');
    expect(noteHeader).toBeInTheDocument();
});
