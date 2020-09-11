import React, { useState } from 'react';
import './TextEditor.css';
import SetFontSize from '../ChangeText/SetFontSize';
import SetColor from '../ChangeText/SetColor';
import SetBackground from '../ChangeText/SetBackground';

function TextEditor() {
  const [text, setText] = useState('');

  const execCommand = (command, value) => {
    document.execCommand('styleWithCSS', true, null);
    document.execCommand(command, false, value);
    document.execCommand('styleWithCSS', false, null);
  };

  const getSelectedText = () => {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);

    if (range.startOffset === range.endOffset) {
      execCommand('selectAll', true);
      selection = window.getSelection();
      range = selection.getRangeAt(0);
    }

    const contents = range.cloneContents();
    const element = contents.childNodes.length === 1 ? range.startContainer.parentNode : contents;
    const style = { fontSize: 'medium', color: 'rgb(0, 0, 0)', backgroundColor: 'rgb(255, 255, 255)' };
    const out = [];

    parseElement(element, style, out);
    console.log(out);
  };

  const parseElement = (element, parentStyle, out) => {
    const style = { ...parentStyle };

    if (element.style) {
      style.fontSize = element.style.fontSize || style.fontSize;
      style.color = element.style.color || style.color;
      style.backgroundColor = element.style.backgroundColor || style.backgroundColor;
    }

    if (element.nodeType === Node.TEXT_NODE) {
      const record = {
        text: element.textContent,
        fontSize: style.fontSize,
        color: style.color,
        backgroundColor: style.backgroundColor,
      };

      out.push(record);
    } else {
      for (const el of element.childNodes) {
        parseElement(el, style, out);
      }
    }
  };

  return (
    <div className={'main-container'}>
      <div className={'buttons-container'}>
        <SetFontSize execCommand={execCommand} />
        <SetColor execCommand={execCommand} />
        <SetBackground execCommand={execCommand} />
      </div>

      <div
        className={'text-field'}
        contentEditable
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={getSelectedText}>Get styles in console</button>
    </div>
  );
}

export default TextEditor;
