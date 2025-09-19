export interface Chapter {
    number: number;
    title: string;
    content: string;
}

const chapter1: Chapter = {
    number: 1,
    title: "The Knight Appears",
    content: `
From the silence of the terminal, a presence stirred.  
Lines of forgotten code shimmered faintly, merging into a silhouette.  
Out of the shifting shadows stepped a knight clad in armor woven with fragments of repositories.  

A new character had arrived — **Sir Git**.  

His armor shimmered with patches of code, commit messages engraved upon the steel.  
On his back hung a repository bound in chains, heavy with unresolved issues and pending reviews.  

In his hand, he carried a glowing sword.  
It pulsed and hummed with the power of a thousand merged pull requests,  
a blade forged in the fires of countless late-night debugging sessions.  

"⚔️ Sir Git," he declared, his voice resonating like a commit pushed to the main branch,  
"I have come to merge our destinies."  

The Blinking Cursor hesitated, its light flickering uncertainly.  
Then, with determination, it answered:  
"Let's do this on a new branch."  

The knight lowered his sword, and the cursor blinked in unison.  
Outside, the storm raged on, but within the terminal a new alliance had been forged.  
Together, knight and cursor stood against the storm,  
ready to face forks, conflicts, and commits yet to come.  

And so, the saga began.
  `,
};

export default chapter1;
