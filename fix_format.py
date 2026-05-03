import re

with open('test.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the array content
match = re.search(r'const alreadyUpdated = \[(.*?)\];', content, re.DOTALL)
if match:
    array_content = match.group(1)
    # Split by newlines and process each line
    lines = array_content.strip().split('\n')
    formatted_lines = []
    
    for line in lines:
        line = line.strip()
        if line and not line.startswith('"'):
            # Remove trailing comma if exists
            line = line.rstrip(',')
            # Add quotes and comma
            formatted_lines.append(f'  "{line}",')
        elif line.startswith('"'):
            # Already quoted, ensure comma
            if not line.endswith(','):
                formatted_lines.append(f'  {line},')
            else:
                formatted_lines.append(f'  {line}')
    
    # Remove last comma
    if formatted_lines:
        formatted_lines[-1] = formatted_lines[-1].rstrip(',')
    
    # Reconstruct the file
    new_array = '[\n' + '\n'.join(formatted_lines) + '\n]'
    new_content = content[:match.start(1)] + '\n' + '\n'.join(formatted_lines) + '\n' + content[match.end(1):]
    
    with open('test.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print('File formatted successfully')
else:
    print('Could not find array')
