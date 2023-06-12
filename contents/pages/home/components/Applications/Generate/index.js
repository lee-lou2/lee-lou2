import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function generateVariableName(apiServerHost) {
  const inputField = document.getElementById("generate-input");
  const outputField = document.getElementById("generate-output");
  const caseSelect = document.getElementById("generate-case");
  outputField.value = '작성중...';
  if (inputField.value === '' || inputField.value.replace(/ /g, '') === '') {
    outputField.value = '내용을 작성해주세요🙏';
    return;
  }
  const requestBody = `'` + inputField.value + `'라는 내용에 맞게 변수명을 만들고싶어. 내용에 '함수', '클래스', '변수' 등의 기능과 관계 없는 내용은 변수명에 포함하지 말아줘. 변수명은 ` + caseSelect.value + ` 표기법에 의해 만들어줘. 변수명의 길이는 50자 미만으로 해줘. 답변을 할때 내용은 모두 빼고 오로지 변수명만 얘기해줘. 변수명은 영어로만 만들어줘. 딱 1개의 변수명만 알려줘.`;
  const url = apiServerHost + "/v1/ai/wrtn";
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "text": requestBody,
    })
  }).then(response => response.json()).then(data => {
    console.log(data);
    outputField.value = data.message;
  }).catch((error) => {
    console.error('Error:', error);
  });
}

export default function GenerateVariableName() {
  const {siteConfig} = useDocusaurusContext();
  const apiServerHost = siteConfig.customFields.API_SERVER_HOST;
  const [caseType, setCaseType] = useState('카멜 케이스');
  const handleCaseChange = (event) => {
    setCaseType(event.target.value);
  };
  return (
    <>
      <h2>💬 변수명 생성기</h2>
      <br/>
      <TextField id="generate-input" placeholder="원하는 내용을 입력해주세요 :)" size="small"/>
      <FormControl sx={{m: 1, minWidth: 150}} size="small">
        <InputLabel>표기 방법</InputLabel>
        <Select
          labelId="generate-case-label"
          id="generate-case"
          label="표기 방법"
          value={caseType}
          onChange={handleCaseChange}
        >
          <MenuItem value={'카멜 케이스'}>카멜 케이스</MenuItem>
          <MenuItem value={'스네이크 케이스'}>스네이크 케이스</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={() => {
        generateVariableName(apiServerHost)
      }}>생성하기</Button>
      <TextField id="generate-output" size="small" disabled/>
    </>
  )
}