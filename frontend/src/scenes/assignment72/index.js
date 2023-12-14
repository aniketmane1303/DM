// import React, { useState, useEffect } from 'react';

// const RuleList = ({ rules, selectedMethod }) => {
//   const rawRules = rules[selectedMethod] || '[]'; // Use '[]' as default in case the rules are not available
//   const parsedRules = JSON.parse(rawRules);

//   console.log('Filtered Rules:', rawRules); // Log filtered rules

  
//   return (
//     <div>
//       <h2>Filtered Rules</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Antecedents</th>
//             <th>Consequents</th>
//             <th>Confidence</th>
//             <th>Support</th>
//             <th>Lift</th>
//             {/* Add other table headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {parsedRules.map((rule, index) => (
//             <tr key={index}>
//               <td>{rule.antecedents.join(', ')}</td>
//               <td>{rule.consequents.join(', ')}</td>
//               <td>{rule.confidence}</td>
//               <td>{rule.support}</td>
//               <td>{rule.lift}</td>
//               {/* Add other table cells as needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


// const Assignment72 = () => {
//   const [confidence, setConfidence] = useState('');
//   const [support, setSupport] = useState('');
//   const [selectedMethod, setSelectedMethod] = useState('chi');
//   const [rules, setRules] = useState({});

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/rules`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           confidence: parseFloat(confidence),
//           support: parseFloat(support),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setRules(data);

//       console.log('Fetched Rules:', data); // Log fetched rules
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [confidence, support]);

//   const handleSubmit = event => {
//     event.preventDefault();
//     fetchData();
//   };

//   return (
//     <div>
//       <h1>Rule Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Confidence:
//           <input
//             type="text"
//             value={confidence}
//             onChange={e => setConfidence(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Support:
//           <input
//             type="text"
//             value={support}
//             onChange={e => setSupport(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Method:
//           <select value={selectedMethod} onChange={e => setSelectedMethod(e.target.value)}>
//             <option value="rules_cosine">Cosine</option>
//             <option value="rules_kulczynski">Kulczynski</option>
//             <option value="rules_all_confidence">All Confidence</option>
//             <option value="rules_max_confidence">Max Confidence</option>
//             <option value="rules_lift">Lift</option>
//           </select>
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <RuleList rules={rules} selectedMethod={selectedMethod} />
//     </div>
//   );
// };

// export default Assignment72;








// import React, { useState, useEffect } from 'react';
// import { Button, TextField, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

// const RuleList = ({ rules, selectedMethod }) => {
//   const rawRules = rules[selectedMethod] || '[]';
//   const parsedRules = JSON.parse(rawRules);

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Antecedents</TableCell>
//             <TableCell>Consequents</TableCell>
//             <TableCell>Confidence</TableCell>
//             <TableCell>Support</TableCell>
//             <TableCell>Lift</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {parsedRules.map((rule, index) => (
//             <TableRow key={index}>
//               <TableCell>{rule.antecedents.join(', ')}</TableCell>
//               <TableCell>{rule.consequents.join(', ')}</TableCell>
//               <TableCell>{rule.confidence}</TableCell>
//               <TableCell>{rule.support}</TableCell>
//               <TableCell>{rule.lift}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// const Assignment72 = () => {
//   const [confidence, setConfidence] = useState('');
//   const [support, setSupport] = useState('');
//   const [selectedMethod, setSelectedMethod] = useState('chi');
//   const [rules, setRules] = useState({});

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/rules`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           confidence: parseFloat(confidence),
//           support: parseFloat(support),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setRules(data);

//       console.log('Fetched Rules:', data);
//     } catch (error) {
//       console.error('Error fetching rules:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [confidence, support]);

//   const handleSubmit = event => {
//     event.preventDefault();
//     fetchData();
//   };

//   return (
//     <div>
//       <h1>Rule Page</h1>
//       <form onSubmit={handleSubmit}>
//         <TextField label="Confidence" value={confidence} onChange={e => setConfidence(e.target.value)} />
//         <TextField label="Support" value={support} onChange={e => setSupport(e.target.value)} />
//         <Select value={selectedMethod} onChange={e => setSelectedMethod(e.target.value)}>
//           <MenuItem value="rules_cosine">Cosine</MenuItem>
//           <MenuItem value="rules_kulczynski">Kulczynski</MenuItem>
//           <MenuItem value="rules_all_confidence">All Confidence</MenuItem>
//           <MenuItem value="rules_max_confidence">Max Confidence</MenuItem>
//           <MenuItem value="rules_lift">Lift</MenuItem>
//         </Select>
//         <Button type="submit">Submit</Button>
//       </form>
//       <RuleList rules={rules} selectedMethod={selectedMethod} />
//     </div>
//   );
// };

// export default Assignment72;







import React, { useState, useEffect } from 'react';

const RuleList = ({ rules, selectedMethod }) => {
  const rawRules = rules[selectedMethod] || '[]';
  const parsedRules = JSON.parse(rawRules);

  return (
    <div>
      <h2>Filtered Rules</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th style={tableHeaderStyle}>Antecedents</th>
            <th style={tableHeaderStyle}>Consequents</th>
            <th style={tableHeaderStyle}>Confidence</th>
            <th style={tableHeaderStyle}>Support</th>
            <th style={tableHeaderStyle}>Lift</th>
          </tr>
        </thead>
        <tbody>
          {parsedRules.map((rule, index) => (
            <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
              <td style={tableCellStyle}>{rule.antecedents.join(', ')}</td>
              <td style={tableCellStyle}>{rule.consequents.join(', ')}</td>
              <td style={tableCellStyle}>{rule.confidence}</td>
              <td style={tableCellStyle}>{rule.support}</td>
              <td style={tableCellStyle}>{rule.lift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const evenRowStyle = {
  backgroundColor: '#e6f7ff',
};

const oddRowStyle = {
  backgroundColor: '#ffffff',
};

const tableHeaderStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  border: '1px solid #ddd',
};

const Assignment72 = () => {
  const [confidence, setConfidence] = useState('');
  const [support, setSupport] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('chi');
  const [rules, setRules] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/rules`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          confidence: parseFloat(confidence),
          support: parseFloat(support),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setRules(data);
    } catch (error) {
      console.error('Error fetching rules:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [confidence, support]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Rule Page</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Confidence:
          <input
            type="text"
            value={confidence}
            onChange={(e) => setConfidence(e.target.value)}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Support:
          <input
            type="text"
            value={support}
            onChange={(e) => setSupport(e.target.value)}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Method:
          <select
            value={selectedMethod}
            onChange={(e) => setSelectedMethod(e.target.value)}
            style={selectStyle}
          >
            <option value="rules_cosine">Cosine</option>
            <option value="rules_kulczynski">Kulczynski</option>
            <option value="rules_all_confidence">All Confidence</option>
            <option value="rules_max_confidence">Max Confidence</option>
            <option value="rules_lift">Lift</option>
          </select>
        </label>
        <br />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
      <RuleList rules={rules} selectedMethod={selectedMethod} />
    </div>
  );
};

const labelStyle = {
  display: 'block',
  margin: '10px 0',
};

const inputStyle = {
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box',
};

const selectStyle = {
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Assignment72;
