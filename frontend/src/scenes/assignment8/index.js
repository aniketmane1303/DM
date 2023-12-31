// import React, { useState } from 'react';

// function Assignment8() {
//   const [url, setUrl] = useState('');
//   const [links, setLinks] = useState([]);
//   const [error, setError] = useState(null);
//   const [hitsData, setHitsData] = useState(null);
//   const [pageData, setPageData] = useState(null);
//   const [dfsLinks, setDfsLinks] = useState(null);
//   const [bfsLinks, setBfsLinks] = useState(null);

//   const handleSubmit = async () => {
//     try {
//       // Reset error state
//       setError(null);

//       const response = await fetch('http://127.0.0.1:8000/crawl', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded', // Set content type to form data
//         },
//         body: new URLSearchParams({ url }), // Send the URL with the key 'url'
//       });

//       if (!response.ok) {
//         // Handle non-successful response (e.g., 4xx or 5xx status)
//         setError('Error fetching data. Please try again.');
//         setLinks([]);
//         return;
//       }

//       const data = await response.json();
//       console.log('API Response:', data); // Log the API response

//       if (data && data.links && Array.isArray(data.links)) {
//         setLinks(data.links);
//       } else {
//         console.error('Invalid links data:', data);
//         setLinks([]);
//       }

//       // Set DFS and BFS links
//       setDfsLinks(data.dfs_links);
//       setBfsLinks(data.bfs_links);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Error fetching data. Please try again.');
//       setLinks([]);
//       setDfsLinks(null);
//       setBfsLinks(null);
//     }
//   };

//   const handleHitsButtonClick = async () => {
//     try {
//       const hitsResponse = await fetch('http://127.0.0.1:8000/hits');
//       if (!hitsResponse.ok) {
//         setError('Error fetching HITS data. Please try again.');
//         setHitsData(null);
//         return;
//       }

//       const hitsData = await hitsResponse.json();
//       console.log('HITS API Response:', hitsData); // Log the HITS API response

//       if (hitsData && hitsData.top_hub_scores && hitsData.top_authority_scores) {
//         setHitsData(hitsData);
//       } else {
//         console.error('Invalid HITS data:', hitsData);
//         setHitsData(null);
//       }
//     } catch (error) {
//       console.error('Error fetching HITS data:', error);
//       setError('Error fetching HITS data. Please try again.');
//       setHitsData(null);
//     }
//   };

//   const handlePageButtonClick = async () => {
//     try {
//       const pageResponse = await fetch('http://127.0.0.1:8000/pagerank');
//       if (!pageResponse.ok) {
//         setError('Error fetching PageRank data. Please try again.');
//         setPageData(null);
//         return;
//       }

//       const pageData = await pageResponse.json();
//       console.log('PageRank API Response:', pageData); // Log the PageRank API response

//       if (pageData && pageData.pagerank_scores) {
//         setPageData(pageData);
//       } else {
//         console.error('Invalid PageRank data:', pageData);
//         setPageData(null);
//       }
//     } catch (error) {
//       console.error('Error fetching PageRank data:', error);
//       setError('Error fetching PageRank data. Please try again.');
//       setPageData(null);
//     }
//   };

//   const handleDfsButtonClick = async () => {
//     try {
//       const dfsResponse = await fetch('http://127.0.0.1:8000/crawl-dfs');
//       if (!dfsResponse.ok) {
//         setError('Error fetching DFS links. Please try again.');
//         setDfsLinks(null);
//         return;
//       }

//       const dfsLinks = await dfsResponse.json();
//       console.log('DFS API Response:', dfsLinks); // Log the DFS API response

//       if (dfsLinks && dfsLinks.dfs_links) {
//         setDfsLinks(dfsLinks.dfs_links);
//       } else {
//         console.error('Invalid DFS links:', dfsLinks);
//         setDfsLinks(null);
//       }
//     } catch (error) {
//       console.error('Error fetching DFS links:', error);
//       setError('Error fetching DFS links. Please try again.');
//       setDfsLinks(null);
//     }
//   };

//   const handleBfsButtonClick = async () => {
//     try {
//       const bfsResponse = await fetch('http://127.0.0.1:8000/crawl-bfs');
//       if (!bfsResponse.ok) {
//         setError('Error fetching BFS links. Please try again.');
//         setBfsLinks(null);
//         return;
//       }

//       const bfsLinks = await bfsResponse.json();
//       console.log('BFS API Response:', bfsLinks); // Log the BFS API response

//       if (bfsLinks && bfsLinks.bfs_links) {
//         setBfsLinks(bfsLinks.bfs_links);
//       } else {
//         console.error('Invalid BFS links:', bfsLinks);
//         setBfsLinks(null);
//       }
//     } catch (error) {
//       console.error('Error fetching BFS links:', error);
//       setError('Error fetching BFS links. Please try again.');
//       setBfsLinks(null);
//     }
//   };

//   return (
//     <div className="Assignment8">
//       <h1>URL Crawler</h1>
//       <div>
//         <label>
//           Enter URL:
//           <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
//         </label>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//       <h2>Links</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>URL</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(links) ? (
//             links.map((link, index) => (
//               <tr key={index}>
//                 <td>{link}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="1">No links available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <div>
//         <button onClick={handleHitsButtonClick}>Get HITS Data</button>
//         {hitsData && (
//           <div>
//             <h2>Top 10 Hub Scores</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Page</th>
//                   <th>Hub</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {hitsData.top_hub_scores.map((score, index) => (
//                   <tr key={index}>
//                     <td>{score.Page}</td>
//                     <td>{score.Hub}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <h2>Top 10 Authority Scores</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Page</th>
//                   <th>Authority</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {hitsData.top_authority_scores.map((score, index) => (
//                   <tr key={index}>
//                     <td>{score.Page}</td>
//                     <td>{score.Authority}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//       <div>
//         <button onClick={handlePageButtonClick}>Get Page Rank</button>
//         {pageData && (
//           <div>
//             <h2>Top 10 Page Rank</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Page</th>
//                   <th>Rank</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {pageData.pagerank_scores.map((score, index) => (
//                   <tr key={index}>
//                     <td>{score.Page}</td>
//                     <td>{score.Rank}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//       <div>
//         <button onClick={handleDfsButtonClick}>Get DFS Links</button>
//         {dfsLinks && (
//           <div>
//             <h2>DFS Links</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>URL</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Array.isArray(dfsLinks) ? (
//                   dfsLinks.map((link, index) => (
//                     <tr key={index}>
//                       <td>{link}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="1">No DFS links available</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//       <div>
//         <button onClick={handleBfsButtonClick}></button>
//         {bfsLinks && (
//           <div>
//             <h2>BFS Links</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>URL</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Array.isArray(bfsLinks) ? (
//                   bfsLinks.map((link, index) => (
//                     <tr key={index}>
//                       <td>{link}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="1">No BFS links available</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Assignment8;


import React, { useState } from 'react';
import {
  Button,
  ChakraProvider,
  Container,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FiMenu, FiRotateCw } from 'react-icons/fi';

function Assignment8() {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);
  const [hitsData, setHitsData] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [dfsLinks, setDfsLinks] = useState(null);
  const [bfsLinks, setBfsLinks] = useState(null);

  const handleSubmit = async () => {
    try {
      // Reset error state
      setError(null);

      const response = await fetch('http://127.0.0.1:8000/crawl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set content type to form data
        },
        body: new URLSearchParams({ url }), // Send the URL with the key 'url'
      });

      if (!response.ok) {
        // Handle non-successful response (e.g., 4xx or 5xx status)
        setError('Error fetching data. Please try again.');
        setLinks([]);
        return;
      }

      const data = await response.json();
      console.log('API Response:', data); // Log the API response

      if (data && data.links && Array.isArray(data.links)) {
        setLinks(data.links);
      } else {
        console.error('Invalid links data:', data);
        setLinks([]);
      }

      // Set DFS and BFS links
      setDfsLinks(data.dfs_links);
      setBfsLinks(data.bfs_links);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
      setLinks([]);
      setDfsLinks(null);
      setBfsLinks(null);
    }
  };

  const handleHitsButtonClick = async () => {
    try {
      const hitsResponse = await fetch('http://127.0.0.1:8000/hits');
      if (!hitsResponse.ok) {
        setError('Error fetching HITS data. Please try again.');
        setHitsData(null);
        return;
      }

      const hitsData = await hitsResponse.json();
      console.log('HITS API Response:', hitsData); // Log the HITS API response

      if (hitsData && hitsData.top_hub_scores && hitsData.top_authority_scores) {
        setHitsData(hitsData);
      } else {
        console.error('Invalid HITS data:', hitsData);
        setHitsData(null);
      }
    } catch (error) {
      console.error('Error fetching HITS data:', error);
      setError('Error fetching HITS data. Please try again.');
      setHitsData(null);
    }
  };

  const handlePageButtonClick = async () => {
    try {
      const pageResponse = await fetch('http://127.0.0.1:8000/pagerank');
      if (!pageResponse.ok) {
        setError('Error fetching PageRank data. Please try again.');
        setPageData(null);
        return;
      }

      const pageData = await pageResponse.json();
      console.log('PageRank API Response:', pageData); // Log the PageRank API response

      if (pageData && pageData.pagerank_scores) {
        setPageData(pageData);
      } else {
        console.error('Invalid PageRank data:', pageData);
        setPageData(null);
      }
    } catch (error) {
      console.error('Error fetching PageRank data:', error);
      setError('Error fetching PageRank data. Please try again.');
      setPageData(null);
    }
  };

  const handleDfsButtonClick = async () => {
    try {
      const dfsResponse = await fetch('http://127.0.0.1:8000/crawl-dfs');
      if (!dfsResponse.ok) {
        setError('Error fetching DFS links. Please try again.');
        setDfsLinks(null);
        return;
      }

      const dfsLinks = await dfsResponse.json();
      console.log('DFS API Response:', dfsLinks); // Log the DFS API response

      if (dfsLinks && dfsLinks.dfs_links) {
        setDfsLinks(dfsLinks.dfs_links);
      } else {
        console.error('Invalid DFS links:', dfsLinks);
        setDfsLinks(null);
      }
    } catch (error) {
      console.error('Error fetching DFS links:', error);
      setError('Error fetching DFS links. Please try again.');
      setDfsLinks(null);
    }
  };

  const handleBfsButtonClick = async () => {
    try {
      const bfsResponse = await fetch('http://127.0.0.1:8000/crawl-bfs');
      if (!bfsResponse.ok) {
        setError('Error fetching BFS links. Please try again.');
        setBfsLinks(null);
        return;
      }

      const bfsLinks = await bfsResponse.json();
      console.log('BFS API Response:', bfsLinks); // Log the BFS API response

      if (bfsLinks && bfsLinks.bfs_links) {
        setBfsLinks(bfsLinks.bfs_links);
      } else {
        console.error('Invalid BFS links:', bfsLinks);
        setBfsLinks(null);
      }
    } catch (error) {
      console.error('Error fetching BFS links:', error);
      setError('Error fetching BFS links. Please try again.');
      setBfsLinks(null);
    }
  };

  return (
    <ChakraProvider>
      <Container maxW="container.lg" centerContent>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          URL Crawler
        </Text>
        <InputGroup size="md" mb={4}>
          <InputLeftElement pointerEvents="none">
            <FiMenu />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </InputGroup>
        <Button colorScheme="teal" variant="solid" onClick={handleSubmit}>
          Submit
        </Button>

        <Text fontSize="xl" fontWeight="bold" mt={6}>
          Links
        </Text>
        {error && <Text color="red">{error}</Text>}
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>URL</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.isArray(links) && links.length > 0 ? (
              links.map((link, index) => (
                <Tr key={index}>
                  <Td>{link}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td>No links available</Td>
              </Tr>
            )}
          </Tbody>
        </Table>

        <Button
          leftIcon={<FiRotateCw />}
          colorScheme="teal"
          variant="outline"
          onClick={handleHitsButtonClick}
          mt={6}
        >
          Get HITS Data
        </Button>
        {hitsData && (
          <>
            <Text fontSize="xl" fontWeight="bold" mt={4}>
              Top 10 Hub Scores
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Page</Th>
                  <Th>Hub</Th>
                </Tr>
              </Thead>
              <Tbody>
                {hitsData.top_hub_scores.map((score, index) => (
                  <Tr key={index}>
                    <Td>{score.Page}</Td>
                    <Td>{score.Hub}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>

            <Text fontSize="xl" fontWeight="bold" mt={4}>
              Top 10 Authority Scores
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Page</Th>
                  <Th>Authority</Th>
                </Tr>
              </Thead>
              <Tbody>
                {hitsData.top_authority_scores.map((score, index) => (
                  <Tr key={index}>
                    <Td>{score.Page}</Td>
                    <Td>{score.Authority}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}

        <Button
          leftIcon={<FiRotateCw />}
          colorScheme="teal"
          variant="outline"
          onClick={handlePageButtonClick}
          mt={6}
        >
          Get Page Rank
        </Button>
        {pageData && (
          <>
            <Text fontSize="xl" fontWeight="bold" mt={4}>
              Top 10 Page Rank
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Page</Th>
                  <Th>Rank</Th>
                </Tr>
              </Thead>
              <Tbody>
                {pageData.pagerank_scores.map((score, index) => (
                  <Tr key={index}>
                    <Td>{score.Page}</Td>
                    <Td>{score.Rank}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}

        <Button
          leftIcon={<FiRotateCw />}
          colorScheme="teal"
          variant="outline"
          onClick={handleDfsButtonClick}
          mt={6}
        >
          Get DFS Links
        </Button>
        {dfsLinks && (
          <>
            <Text fontSize="xl" fontWeight="bold" mt={4}>
              DFS Links
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>URL</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Array.isArray(dfsLinks) && dfsLinks.length > 0 ? (
                  dfsLinks.map((link, index) => (
                    <Tr key={index}>
                      <Td>{link}</Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td>No DFS links available</Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </>
        )}

        <Button
          leftIcon={<FiRotateCw />}
          colorScheme="teal"
          variant="outline"
          onClick={handleBfsButtonClick}
          mt={6}
        >
          Get BFS Links
        </Button>
        {bfsLinks && (
          <>
            <Text fontSize="xl" fontWeight="bold" mt={4}>
              BFS Links
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>URL</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Array.isArray(bfsLinks) && bfsLinks.length > 0 ? (
                  bfsLinks.map((link, index) => (
                    <Tr key={index}>
                      <Td>{link}</Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td>No BFS links available</Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </>
        )}
      </Container>
    </ChakraProvider>
  );
}

export default Assignment8;
