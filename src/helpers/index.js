import React from "react";
import Highlighter from "react-highlight-words";

// const highlightWords = (source, target, callback) => {
//   if (!source) return res;
//   if (!target) return source;

//   const defaultHighlight = s => <em key={Math.random(1000)}>{s}</em>;
//   const res = [];

//   let lastOffset = 0;

//   target.forEach(element => {
//     // Uses replace callback, but not its return value
//     source.replace(new RegExp(element, "gi"), (val, offset) => {
//       // Push both the last part of the string, and the new part with the highlight
//       res.push(
//         source.substr(lastOffset, offset - lastOffset),
//         // Replace the string with JSX or anything.
//         (callback || defaultHighlight)(val)
//       );
//       lastOffset = offset + val.length;
//     });
//   });

//   // Push the last non-highlighted string
//   res.push(source.substr(lastOffset));
//   return res;
// };

////This function and component are workign just fine, as long as the words to be filtered are provided in the oreder in which they appear in the text. Not optimal

// const highlightWords = (source, target, callback) => {
//   if (!source) return res;
//   if (!target) return source;

//   const defaultHighlight = s => <em key={Math.random(1000)}>{s}</em>;
//   const res = [source];

//   let lastOffset = 0;

//   target.forEach(element => {
//     res.forEach(stringEl => {
//         console.log(typeof stringEl)
//       if (typeof stringEl === typeof "")
//         // Uses replace callback, but not its return value
//         stringEl.replace(new RegExp(element, "gi"), (val, offset) => {
//           // Push both the last part of the string, and the new part with the highlight
//           res.push(
//             stringEl.substr(lastOffset, offset - lastOffset),
//             // Replace the string with JSX or anything.
//             (callback || defaultHighlight)(val)
//           );
//           lastOffset = offset + val.length;
//         });
//     });
//   });

//   // Push the last non-highlighted string
//   res.push(source.substr(lastOffset));
//   res.shift();
//   return res;
// };

// export const Highlight = ({ body, items, style }) => {
//   return (
//     <div className={style}>
//       {highlightWords(body, items, s => (
//         <span className="bold-700" key={Math.random(1000)}>
//           {s}
//         </span>
//       ))}
//     </div>
//   );
// };

export const MyHighlight = ({ body, items, style }) => {
  return (
    <div className={style}>
      <Highlighter
        searchWords={[
          "burning man",
          "burning ban’s",
          "Black Rock City",
          "frothin’ Weirdo",
          "frothin’ Weirdos",
          "frothin’",
          "weirdos",
          "frothers",
          "leave no trace",
          "leave no trace!",
          ...items
        ]}
        autoEscape={true}
        textToHighlight={body}
        highlightClassName="bold-700"
        highlightStyle={{ backgroundColor: "transparent" }}
      />
    </div>
  );
};

export const multipleParagraphs = (array, style) => {
  return array.map(paragraph => {
    return (
      <MyHighlight
      key={paragraph.body}
        body={paragraph.body}
        items={paragraph.items}
        style={style}
      />
    );
  });
};
