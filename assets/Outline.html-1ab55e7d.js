import{ab as c,G as r,H as p,E as s,S as e,N as t,ad as n,W as l}from"./framework-f86f98ae.js";const d={},o=n('<h1 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统" aria-hidden="true">#</a> 操作系统</h1><h2 id="基础题目" tabindex="-1"><a class="header-anchor" href="#基础题目" aria-hidden="true">#</a> 基础题目</h2><h3 id="操作系统的主要功能" tabindex="-1"><a class="header-anchor" href="#操作系统的主要功能" aria-hidden="true">#</a> 操作系统的主要功能</h3><p>一般来说，现代操作系统主要提供下面几种功能</p><ul><li><strong>进程管理</strong>: 进程管理的主要作用就是任务调度，在单核处理器下，操作系统会为每个进程分配一个任务，进程管理的工作十分简单；而在多核处理器下，操作系统除了要为进程分配任务外，还要解决处理器的调度、分配和回收等问题</li><li><strong>内存管理</strong>：内存管理主要是操作系统负责管理内存的分配、回收，在进程需要时分配内存以及在进程完成时回收内存，协调内存资源，通过合理的页面置换算法进行页面的换入换出</li><li><strong>设备管理</strong>：根据确定的设备分配原则对设备进行分配，使设备与主机能够并行工作，为用户提供良好的设备使用界面。</li><li><strong>文件管理</strong>：有效地管理文件的存储空间，合理地组织和管理文件系统，为文件访问和文件保护提供更有效的方法及手段。</li><li><strong>提供用户接口</strong>：操作系统提供了访问应用程序和硬件的接口，使用户能够通过应用程序发起系统调用从而操纵硬件，实现想要的功能。</li></ul><h3 id="linux-进程和线程的区别" tabindex="-1"><a class="header-anchor" href="#linux-进程和线程的区别" aria-hidden="true">#</a> Linux 进程和线程的区别？</h3><p>对于线程来讲，其地址空间 mm_struct、目录信息 fs_struct、打开文件列表 files_struct 都是和创建它的任务共享的。</p><p>但是对于进程来讲，地址空间 mm_struct、目录信息 fs_struct、打开文件列表 files_struct 都要是独立拥有的，都需要去申请内存并初始化它们。</p><p>在 Linux 内核中并没有对线程做特殊处理，还是由 task_struct 来管理。从内核的角度看，用户态的线程本质上还是一个进程。只不过和普通进程比，稍微&quot;轻量&quot;了那么一些。</p>',9),i={href:"https://heapdump.cn/article/4683828",target:"_blank",rel:"noopener noreferrer"},u=n('<h3 id="mmap和read-write的区别" tabindex="-1"><a class="header-anchor" href="#mmap和read-write的区别" aria-hidden="true">#</a> mmap和read/write的区别</h3><p>mmap() 是通过将<strong>虚拟内存地址</strong>映射到文件的<strong>页缓存(Page Cache)<strong>来实现的。当对映射后的虚拟内存进行读写操作时，其效果等价于直接对文件的</strong>页缓存</strong>进行读写操作。对文件的页缓存进行读写操作，也等价于对文件进行读写操作。</p><h3 id="linux中进程的状态" tabindex="-1"><a class="header-anchor" href="#linux中进程的状态" aria-hidden="true">#</a> Linux中进程的状态</h3><table><thead><tr><th>状态</th><th>含义</th></tr></thead><tbody><tr><td>TASK_RUNNING</td><td>可运行状态。未必正在使用CPU，也许是在等待调度</td></tr><tr><td>TASK_INTERRUPTIBLE</td><td>可中断的睡眠状态。正在等待某个条件满足</td></tr><tr><td>TASK_UNINTERRUPTIBLE</td><td>不可中断的睡眠状态。不会被信号中断</td></tr><tr><td>__TASK_STOPPED</td><td>暂停状态。收到某种信号，运行被停止</td></tr><tr><td>__TASK_TRACED</td><td>被跟踪状态。进程停止，被另一个进程跟踪</td></tr><tr><td>EXIT_ZOMBIE</td><td>僵尸状态。进程已经退出，但尚未被父进程或者init进程收尸</td></tr><tr><td>EXIT_DEAD</td><td>真正的死亡状态</td></tr></tbody></table>',4),m={href:"https://quant67.com/post/linux/taskstatus.html",target:"_blank",rel:"noopener noreferrer"},k=n('<h3 id="ps命令中stat字段的含义" tabindex="-1"><a class="header-anchor" href="#ps命令中stat字段的含义" aria-hidden="true">#</a> ps命令中STAT字段的含义</h3><table><thead><tr><th>符号</th><th>状态</th></tr></thead><tbody><tr><td>D</td><td>无法中断的休眠状态（通常 IO 的进程）；</td></tr><tr><td>R</td><td>正在运行可中在队列中可过行的；</td></tr><tr><td>S</td><td>处于休眠状态；</td></tr><tr><td>T</td><td>停止或被追踪；</td></tr><tr><td>W</td><td>进入内存交换 （从内核2.6开始无效）；</td></tr><tr><td>X</td><td>死掉的进程 （基本很少见）；</td></tr><tr><td>Z</td><td>僵尸进程；</td></tr><tr><td>&lt;</td><td>优先级高的进程</td></tr><tr><td>N</td><td>优先级较低的进程</td></tr><tr><td>L</td><td>有些页被锁进内存；</td></tr><tr><td>s</td><td>进程的领导者（在它之下有子进程）；</td></tr><tr><td>l</td><td>多线程，克隆线程（使用 CLONE_THREAD, 类似 NPTL pthreads）；</td></tr><tr><td>+</td><td>位于后台的进程组；</td></tr></tbody></table><h3 id="如何查看进程的内存分布" tabindex="-1"><a class="header-anchor" href="#如何查看进程的内存分布" aria-hidden="true">#</a> 如何查看进程的内存分布</h3><p><code>cat /proc/&lt;pid&gt;/maps</code>和<code>cat /proc/&lt;pid&gt;/smaps</code></p><h3 id="vmstat-中的buffer和cache有什么区别" tabindex="-1"><a class="header-anchor" href="#vmstat-中的buffer和cache有什么区别" aria-hidden="true">#</a> vmstat 中的buffer和cache有什么区别？</h3><p>Buffer 既可以用作“将要写入磁盘数据的缓存”，也可以用作“从磁盘读取数据的缓存”。</p><p>Cache 既可以用作“从文件读取数据的页缓存”，也可以用作“写文件的页缓存”。 这样，我们就回答了案例开始前的两个问题。</p><p>简单来说，Buffer 是对磁盘数据的缓存，而 Cache 是文件数据的缓存，它们既会用在读请求中，也会用在写请求中。</p>',8),h={href:"https://cloud.tencent.com/developer/article/1844990",target:"_blank",rel:"noopener noreferrer"},v=n('<h3 id="什么是惊群现象-怎么解决" tabindex="-1"><a class="header-anchor" href="#什么是惊群现象-怎么解决" aria-hidden="true">#</a> 什么是惊群现象，怎么解决</h3><p>什么是惊群现象？</p><p>以accept为例子， 在Linux2.6版本之前， 如果你创建了一个主进程， 在主进程创建了socket、bind、listen之后，fork()出来多个进程，每个子进程都开始循环处理（accept）这个listen_fd。每个进程都阻塞在accept上，当一个新的连接到来时候，所有的进程都会被唤醒，但是其中只有一个进程会接受成功，其余皆失败，重新休眠。</p><p><strong>对于accept的惊群</strong>， Linux2.6的版本已经解决了，大概的处理方式就是，当内核接收到一个客户连接后，只会唤醒等待队列上的第一个进程（线程）,所以如果服务器采用accept阻塞调用方式，在最新的linux系统中已经没有“惊群效应”了</p><p><strong>对于epoll的惊群</strong>， 依旧存在： accept确实应该只能被一个进程调用成功，内核很清楚这一点。但epoll不一样，它监听的文件描述符，accept(建连接)，还有可能是其他网络IO事件的，而其他IO事件是否只能由一个进程处理，是不一定的，内核不能保证这一点，这是一个由用户决定的事情，例如可能一个文件会由多个进程来读写。所以，对epoll的惊群，内核则不予处理。</p><p><strong>惊群的解决办法</strong>：</p><p>1.加锁， nginx采用ngx_use_accept_mutex来避免惊群。Nginx通过一次仅允许一个进程将 listen fd 放入自己的 epoll 来监听其 READ 事件的方式来达到 listen fd&quot;惊群&quot;避免。</p><p>2.SO_REUSEPORT。</p><h3 id="现代操作系统的分段和分页" tabindex="-1"><a class="header-anchor" href="#现代操作系统的分段和分页" aria-hidden="true">#</a> 现代操作系统的分段和分页</h3>',9),g={href:"https://www.cnblogs.com/xuanyuan/p/15266447.html",target:"_blank",rel:"noopener noreferrer"},_=n(`<h3 id="epoll的工作原理" tabindex="-1"><a class="header-anchor" href="#epoll的工作原理" aria-hidden="true">#</a> epoll的工作原理</h3><p>epoll底层实现中有两个关键的数据结构，一个是eventpoll，另一个是epitem。</p><p>其中eventpoll中有两个成员变量分别是rbr和rdlist,前者指向一颗红黑树的根，后者指向双向链表的头。</p><p>而epitem则是红黑树节点和双向链表节点的综合体，也就是说epitem即可作为树的节点，又可以作为链表的节点，并且epitem中包含着用户注册的事件。</p><p>当用户调用epoll_create()时，会创建eventpoll对象（包含一个红黑树和一个双链表）；</p><p>而用户调用epoll_ctl(ADD)时，会在eventpoll 结构体中的红黑树红黑树上增加节点（epitem对象）；</p><p>接下来，操作系统会默默地在通过epoll_event_callback()来管理eventpoll对象。当有事件被触发时，操作系统则会调用epoll_event_callback函数，将含有该事件的epitem添加到双向链表中。</p><p>当用户需要管理连接时，只需通过epoll_wait()从eventpoll对象中的双链表下&quot;摘取&quot;epitem并取出其包含的事件即可。</p><h3 id="野指针为什么可能导致进程crash" tabindex="-1"><a class="header-anchor" href="#野指针为什么可能导致进程crash" aria-hidden="true">#</a> 野指针为什么可能导致进程crash?</h3><p>访问指针的时候，通过查询页表进行虚拟地址向物理地址的映射，当这个地址无效时，就会产生缺页中断，内核中有一个page_fault_handler用于处理该中断，如果野指针指向的地址无效，操作系统就会发送11号信号(SIGSEGV)终止此进程，于是进程异常终止崩溃。</p><h2 id="进阶题目" tabindex="-1"><a class="header-anchor" href="#进阶题目" aria-hidden="true">#</a> 进阶题目</h2><h3 id="操作系统pcb-task-struct-内有哪些内容" tabindex="-1"><a class="header-anchor" href="#操作系统pcb-task-struct-内有哪些内容" aria-hidden="true">#</a> 操作系统PCB(task struct)内有哪些内容</h3><p><strong>任务ID</strong>：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>
<span class="token class-name">pid_t</span> tgid<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">task_struct</span> <span class="token operator">*</span>group_leader<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>亲缘关系</strong>:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">task_struct</span> __rcu <span class="token operator">*</span>real_parent<span class="token punctuation">;</span> 
<span class="token keyword">struct</span> <span class="token class-name">task_struct</span> __rcu <span class="token operator">*</span>parent<span class="token punctuation">;</span> 
<span class="token keyword">struct</span> <span class="token class-name">list_head</span> children<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">list_head</span> sibling<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>任务状态</strong>:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">volatile</span> <span class="token keyword">long</span> state<span class="token punctuation">;</span>
<span class="token keyword">int</span> exit_state<span class="token punctuation">;</span>
<span class="token keyword">unsigned</span> <span class="token keyword">int</span> flags<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>权限</strong>:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">cred</span> __rcu         <span class="token operator">*</span>real_cred<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">cred</span> __rcu         <span class="token operator">*</span>cred<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行统计</strong>:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>u64        utime<span class="token punctuation">;</span><span class="token comment">//用户态消耗的CPU时间</span>
u64        stime<span class="token punctuation">;</span><span class="token comment">//内核态消耗的CPU时间</span>
<span class="token keyword">unsigned</span> <span class="token keyword">long</span>      nvcsw<span class="token punctuation">;</span><span class="token comment">//自愿(voluntary)上下文切换计数</span>
<span class="token keyword">unsigned</span> <span class="token keyword">long</span>      nivcsw<span class="token punctuation">;</span><span class="token comment">//非自愿(involuntary)上下文切换计数</span>
u64        start_time<span class="token punctuation">;</span><span class="token comment">//进程启动时间，不包含睡眠时间</span>
u64        real_start_time<span class="token punctuation">;</span><span class="token comment">//进程启动时间，包含睡眠时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>调度相关</strong>:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//是否在运行队列上</span>
<span class="token keyword">int</span>        on_rq<span class="token punctuation">;</span>
<span class="token comment">//优先级</span>
<span class="token keyword">int</span>        prio<span class="token punctuation">;</span>
<span class="token keyword">int</span>        static_prio<span class="token punctuation">;</span>
<span class="token keyword">int</span>        normal_prio<span class="token punctuation">;</span>
<span class="token comment">//调度器类</span>
<span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">sched_class</span>  <span class="token operator">*</span>sched_class<span class="token punctuation">;</span>
<span class="token comment">//调度实体</span>
<span class="token keyword">struct</span> <span class="token class-name">sched_entity</span>    se<span class="token punctuation">;</span>
<span class="token comment">//调度策略</span>
<span class="token keyword">unsigned</span> <span class="token keyword">int</span>      policy<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>信号处理</strong>:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* Signal handlers: */</span>
<span class="token keyword">struct</span> <span class="token class-name">signal_struct</span>    <span class="token operator">*</span>signal<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">sighand_struct</span>    <span class="token operator">*</span>sighand<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">sigpending</span>    pending<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>内存管理</strong>:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">mm_struct</span>                <span class="token operator">*</span>mm<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">mm_struct</span>                <span class="token operator">*</span>active_mm<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>文件和文件系统</strong>:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//文件系统信息</span>
<span class="token keyword">struct</span> <span class="token class-name">fs_struct</span>                <span class="token operator">*</span>fs<span class="token punctuation">;</span>
<span class="token comment">//打开的文件的信息</span>
<span class="token keyword">struct</span> <span class="token class-name">files_struct</span>             <span class="token operator">*</span>files<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>命名空间</strong>:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">nsproxy</span> <span class="token operator">*</span>nsproxy<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,32);function b(f,x){const a=l("ExternalLinkIcon");return r(),p("div",null,[o,s("p",null,[s("a",i,[e("https://heapdump.cn/article/4683828"),t(a)])]),u,s("p",null,[s("a",m,[e("https://quant67.com/post/linux/taskstatus.html"),t(a)])]),k,s("p",null,[s("a",h,[e("https://cloud.tencent.com/developer/article/1844990"),t(a)])]),v,s("p",null,[s("a",g,[e("https://www.cnblogs.com/xuanyuan/p/15266447.html"),t(a)])]),_])}const y=c(d,[["render",b],["__file","Outline.html.vue"]]);export{y as default};
