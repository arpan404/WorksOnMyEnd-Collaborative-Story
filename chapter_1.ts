export interface Chapter {
    number: number;
    title: string;
    content: string;
}

const chapter1: Chapter = {
    number: 1,
    title: "The Knight Appears",
    content: `
A new character, a knight named Sir Git, emerged from the shadows.  
His armor shimmered with patches of code, and upon his back hung a repository of legends.  

In his hand he carried a glowing sword, humming with the power of a thousand merged pull requests.  

"⚔️ Sir Git," he declared, "I have come to merge our destinies."  

The Blinking Cursor hesitated, then replied:  
"Let's do this on a new branch."  

Together, knight and cursor stood against the storm,  
awaiting the next commit in their shared saga.
  `,
};

export default chapter1;
